import AWS from "aws-sdk";

export const handler = async (event) => {
  // ユーザの属性はclaimsに入っている
  const user_id = event.requestContext.authorizer.claims.sub;

  const scanParams = {
    TableName: process.env.DYNAMODB_TASK_TABLE,
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
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({
      total: result.Count,
      items: result.Items.map((item) => {
        return {
          user_id: item.user_id,
          tasks: item.tasks,
        };
      }),
    }),
  };
};
