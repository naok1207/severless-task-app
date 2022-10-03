import AWS from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient();

/**
 * uuidの有効チェック
 * 有効の時trueを返す
 */
export const validUuid = async (tableName, pk, user_id) => {
  const params = {
    TableName: tableName,
    Key: {
      pk,
      user_id,
    },
  };
  const result = await documentClient.get(params).promise();
  console.log({ result });
  console.log("isValid: ", !result);

  return !result;
};
