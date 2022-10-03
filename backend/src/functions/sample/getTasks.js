import AWS from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
  const scanParams = {
    TableName: process.env.DYNAMODB_TASK_TABLE,
  };

  const result = await documentClient.scan(scanParams).promise();

  if (result.Count === 0) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      total: result.Count,
      items: result.Items,
    }),
  };
};
