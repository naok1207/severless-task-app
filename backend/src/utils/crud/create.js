import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { success, error } from "../response/response";

const documentClient = new AWS.DynamoDB.DocumentClient();

export const create = async (event, tableName, item) => {
  const user_id = event.requestContext.authorizer.claims.sub;
  if (!user_id) return error();

  // TODO: 検討する
  // 使用されていないUIDを取得 (この処理は必要なのか要検討)
  // let uuid = "";
  // let i = 0;
  // while (i < 10) {
  //   uuid = uuidv4();
  //   if (validUuid(tableName, uuid, user_id)) {
  //     break;
  //   }
  //   i++;
  // }
  // if (i >= 10) return error();

  // const isValid = validUuid(tableName, uuid, user_id);
  // if (!isValid) return error("uuid exist");

  const uuid = uuidv4();

  const params = {
    TableName: tableName,
    Item: { pk: uuid, user_id: user_id, ...item },
  };

  return await documentClient
    .put(params)
    .promise()
    .then(() => {
      return success({});
    })
    .catch((err) => {
      return error(err);
    });
};
