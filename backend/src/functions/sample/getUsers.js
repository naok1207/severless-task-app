import AWS from "aws-sdk";

export const handler = async (event) => {
  const scanParams = {
    TableName: process.env.DYNAMODB_USER_TABLE,
  };
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb.scan(scanParams).promise();

  if (result.Count === 0) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      total: result.Count,
      items: result.Items.map((user) => {
        return {
          email: user.email,
        };
      }),
    }),
  };
};
