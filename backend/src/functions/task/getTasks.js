import AWS from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient();

export const handler = async (event, _context, _callback) => {
  console.log({ event });
  const user_id = event.requestContext.authorizer.claims.sub;

  const params = {
    TableName: process.env.DYNAMODB_TASK_TABLE,
    IndexName: "User-Tasks-Index", // TODO: 後でテーブルを変えた際にこのインデックスがデフォルトとなるのでその際には削除
    ExpressionAttributeNames: { "#u": "user_id" },
    ExpressionAttributeValues: { ":val": user_id },
    KeyConditionExpression: "#u = :val",
  };

  console.log({ params });

  const result = await documentClient.query(params).promise();

  console.log({ result });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(result),
  };
};
