import AWS from "aws-sdk";
import { success, error } from "../response/response";

const documentClient = new AWS.DynamoDB.DocumentClient();

// https://qiita.com/mktoho-n/items/6b96674c9c7ba542d2be
const createExpressionAttributeNames = (body) => {
  return Object.entries(body)
    .map(([k, _v]) => ({ [`#${k}`]: k }))
    .reduce((l, r) => Object.assign(l, r), {});
};

const createExpressionAttributeValues = (body) => {
  return Object.entries(body)
    .map(([k, v]) => ({ [`:new${k}`]: v }))
    .reduce((l, r) => Object.assign(l, r), {});
};

const createUpdateExpression = (body) => {
  const array = Object.entries(body).map(([k, _v]) => `#${k} = :new${k}`);
  return `SET ${array.join(", ")}`;
};

export const update = async (event, tableName) => {
  const claims = event.requestContext.authorizer.claims;
  const user_id = claims.sub;

  const body = JSON.parse(event.body);
  const pk = body.pk;
  delete body.pk;

  if (!user_id) return error();

  const ExpressionAttributeNames = createExpressionAttributeNames(body);
  const ExpressionAttributeValues = createExpressionAttributeValues(body);
  const UpdateExpression = createUpdateExpression(body);

  console.log({ event });
  console.log({ body });
  console.log({ ExpressionAttributeNames });
  console.log({ ExpressionAttributeValues });
  console.log({ UpdateExpression });

  const params = {
    TableName: tableName,
    Key: {
      user_id,
      pk,
    },
    ExpressionAttributeNames,
    ExpressionAttributeValues,
    UpdateExpression,
  };

  return await documentClient
    .update(params)
    .promise()
    .then(() => {
      return success({}, "update success");
    })
    .catch((err) => {
      return error(err, "update error");
    });
};
