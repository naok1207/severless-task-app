import AWS from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
  const params = {
    TableName: process.env.DYNAMODB_USER_TABLE,
    Item: {
      email: event.email,
    },
  };

  return await documentClient
    .put(params)
    .promise()
    .then(() => {
      return {
        statusCode: 201,
        body: JSON.stringify({
          message: "signUp success",
        }),
      };
    })
    .catch((err) => {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "signUp canceled",
        }),
      };
    });
};
