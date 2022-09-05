import AWS from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient();

const tasks = [
  { title: "task1", body: "task1 body" },
  { title: "task2", body: "task2 body" },
  { title: "task3", body: "task3 body" },
  { title: "task4", body: "task4 body" },
  { title: "task5", body: "task5 body" },
];

const items = [
  { user_id: "1", tasks },
  { user_id: "2", tasks },
  { user_id: "3", tasks },
  { user_id: "4", tasks },
];

export const handler = async (event, _context, callback) => {
  // const body = JSON.parse(event.body);
  items.forEach((item) => {
    const params = {
      TableName: process.env.DYNAMODB_TASK_TABLE,
      Item: {
        user_id: item.user_id,
        tasks: item.tasks,
      },
    };
    documentClient.put(params, (err, data) => {
      if (err) console.log(err);
      else console.log(data);
    });
  });

  callback(null, event);
};
