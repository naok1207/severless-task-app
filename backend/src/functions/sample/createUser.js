import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
  // const body = JSON.parse(event.body);
  const params = {
    TableName: process.env.DYNAMODB_USER_TABLE,
    Item: {
      id: "1",
      email: "naoki.na17se@gmail.com",
    },
  };
  return await dynamoDb
    .put(params)
    .promise()
    .then(() => {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "OK",
        }),
      };
    })
    .catch((err) => {
      return {
        statusCode: 500,
        body: JSON.stringify("NG"),
      };
    });
};
