- 連番どうする（sort id）をつける場合
- アトミックカウンタ


** レスポンス一例 **
```js
  return await dynamoDb
    .put(params)
    .promise()
    .then(() => {
      return {
        statusCode: 201,
        body: JSON.stringify({
          message: "creted Task complete",
        }),
      };
    })
    .catch((err) => {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "creted Task canceled",
        }),
      };
    });
```
