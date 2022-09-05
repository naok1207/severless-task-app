import AWS from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient();

export const main = async (event, _context, callback) => {
  const id = event.userName;
  const { email } = event.request.userAttributes;
  console.log({ id, email });
  const params = {
    TableName: process.env.DYNAMODB_USER_TABLE,
    Item: { id, email, email_verified: true }, // TODO: 一時的にemail認証は飛ばせるようにする後で調べる
  };

  // TODO: 確認系は後でやる
  event.response.autoConfirmUser = true;
  event.response.autoVerifyEmail = true;

  await documentClient.put(params).promise();

  callback(null, event);
};
