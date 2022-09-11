import AWS from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient();

export const handler = async (event, _context, callback) => {
  const user_id = event.requestContext.authorizer.claims.sub;
  const body = event.body;
  const params = {
    TableName: process.env.DYNAMODB_TASK_TABLE,
    Key: {
      user_id: user_id,
      tasks: {
        title: body.title,
        body: body.body,
      },
    },
  };
  documentClient.add(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({
      message: "addTask Success!!",
    }),
  };
};
