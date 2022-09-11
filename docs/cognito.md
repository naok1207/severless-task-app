cogntioのtriggerが実行された際に作動するfunctionsをserverless.ymlで設定することができる
- PreSignUp
- DefineAuthChallenge
- CreateAuthChallenge
- VerifyAuthChallengeResponse

https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html?icmpid=docs_cognito_console
https://gyazo.com/9b527a51ef54af27dfe85f8cc81aaa48

front -> cognito -> backend functions の順に実行される

`existing: true` 作成したユーザプールを利用して関数を作成する設定しない場合新規のユーザプールが作成される

**認証系を飛ばしたい場合**
preSignUpに以下を追加すればemail認証をスキップできる（メールは飛ぶ）
```
event.response.autoConfirmUser = true;
event.response.autoVerifyEmail = true;
```


## PreSignUp
```js
console.log("event: ", event);
console.log("context: ", context);
console.log("callback: ", callback);
```
```
event:  {
  version: '1',
  region: 'ap-northeast-1',
  userPoolId: 'ap-northeast-1_qT5Jr0G64',
  userName: 'd26ac94e-f057-41e4-9772-7d19a18f5ff4',
  callerContext: {
    awsSdkVersion: 'aws-sdk-unknown-unknown',
    clientId: '67i3c57ffrt2v37h4itar5o4uf'
  },
  triggerSource: 'PreSignUp_SignUp',
  request: {
    userAttributes: { email: 'naoki.na17se@gmail.com' },
    validationData: {}
  },
  response: {
    autoConfirmUser: false,
    autoVerifyEmail: false,
    autoVerifyPhone: false
  }
}
context:  {
  callbackWaitsForEmptyEventLoop: [Getter/Setter],
  succeed: [Function (anonymous)],
  fail: [Function (anonymous)],
  done: [Function (anonymous)],
  functionVersion: '$LATEST',
  functionName: 'backend-dev-preSignUp',
  memoryLimitInMB: '1024',
  logGroupName: '/aws/lambda/backend-dev-preSignUp',
  logStreamName: '2022/08/25/[$LATEST]e5309d3024b1422596c3f63d74e13986',
  clientContext: undefined,
  identity: undefined,
  invokedFunctionArn: 'arn:aws:lambda:ap-northeast-1:587912830269:function:backend-dev-preSignUp',
  awsRequestId: 'a0977730-0731-4a04-ade3-30403362839d',
  getRemainingTimeInMillis: [Function: getRemainingTimeInMillis],
  serverlessSdk: {
    captureError: [Function (anonymous)],
    span: [Function (anonymous)],
    tagEvent: [Function (anonymous)],
    setEndpoint: [Function (anonymous)],
    getTransactionId: [Function (anonymous)],
    getDashboardUrl: [Function (anonymous)]
  },
  captureError: [Function (anonymous)],
  span: [Function (anonymous)]
}
callback:  [Function (anonymous)]
```

## PostAuthentication
認証後
```
event:  {
  version: '1',
  region: 'ap-northeast-1',
  userPoolId: 'ap-northeast-1_qT5Jr0G64',
  userName: '1559ee00-bf44-470b-bd30-25a4d1b2c131',
  callerContext: {
    awsSdkVersion: 'aws-sdk-unknown-unknown',
    clientId: '67i3c57ffrt2v37h4itar5o4uf'
  },
  triggerSource: 'PostAuthentication_Authentication',
  request: {
    userAttributes: {
      sub: '1559ee00-bf44-470b-bd30-25a4d1b2c131',
      'cognito:email_alias': 'naoki.na17se@gmail.com',
      'cognito:user_status': 'CONFIRMED',
      email_verified: 'false',
      email: 'naoki.na17se@gmail.com'
    },
    newDeviceUsed: false
  },
  response: {}
}
context:  {
  callbackWaitsForEmptyEventLoop: [Getter/Setter],
  succeed: [Function (anonymous)],
  fail: [Function (anonymous)],
  done: [Function (anonymous)],
  functionVersion: '$LATEST',
  functionName: 'backend-dev-postAuthentication',
  memoryLimitInMB: '1024',
  logGroupName: '/aws/lambda/backend-dev-postAuthentication',
  logStreamName: '2022/08/25/[$LATEST]fbb294962a0e4a9c9d7dad7691d2ff2c',
  clientContext: undefined,
  identity: undefined,
  invokedFunctionArn: 'arn:aws:lambda:ap-northeast-1:587912830269:function:backend-dev-postAuthentication',
  awsRequestId: 'd74443f8-25a4-4080-95a1-c439ca2c0f6c',
  getRemainingTimeInMillis: [Function: getRemainingTimeInMillis],
  serverlessSdk: {
    captureError: [Function (anonymous)],
    span: [Function (anonymous)],
    tagEvent: [Function (anonymous)],
    setEndpoint: [Function (anonymous)],
    getTransactionId: [Function (anonymous)],
    getDashboardUrl: [Function (anonymous)]
  },
  captureError: [Function (anonymous)],
  span: [Function (anonymous)]
}
```


### curl sample
```
curl -H 'Authorization: eyJraWQiOiJzM2djOWhUYjJcL29URDVvaksrOE9TeVwvRm5lM0NDZm0xUWZOeEVHeVpUUUk9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwODQyZWRlMS0yYWNmLTQ3YmMtODk0ZS00YzYzNzA5MDM3ZTMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLW5vcnRoZWFzdC0xX2ZpNmpsaVZZViIsImNvZ25pdG86dXNlcm5hbWUiOiIwODQyZWRlMS0yYWNmLTQ3YmMtODk0ZS00YzYzNzA5MDM3ZTMiLCJvcmlnaW5fanRpIjoiNWIxNjQ1NTMtYTZhYi00NmY2LWFhZDMtMTY1MjJhZWEzZTRmIiwiYXVkIjoiNHY1dTNxbXBwZnI1ZHZmMzdtcW4zcW5jbWEiLCJldmVudF9pZCI6ImUwNGQ5NmRhLTg5OTgtNDUxYi1hOTBmLTg0ZTI0NDZlMzU0NCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjYyNzE3Mjg2LCJleHAiOjE2NjI3MjA4ODYsImlhdCI6MTY2MjcxNzI4NiwianRpIjoiZjhlNWRmODAtY2UyOC00NWUyLTg0NWUtODBhZWUyMWI3Mjc5IiwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIn0.fo-80occnxKQhuI0zWD2ursLiH0IZPBvmxAQ3B_tTpdkFB7cql8qECiJxt3HsrQzIliFC-UaAf5o__x_86cH__5eIVAFGqrsZMXABPXeUlgiCCen5tBWeUfzh41S42xgy-qUozj4AjV1edmA1L8ZQYs-mxE5i90yONTiA0HxhMh5Au4gFKSntbTX8q7aw0NfTx94L3R8Sng2s3B05zf1GH5Lz2S4Deqh5V3gcMd1IrYknhUudB4d5NHUCVY97u5aqhx4SjhQ_0qmOsWBTGvgTqRbjqmPGjyyzwiXfd8F5lxsyZc9LNd0yZUq7rtuizOo3jJf3mqEzhje8whSZ6VbAA' https://zo0bofjgm5.execute-api.ap-northeast-1.amazonaws.com/dev/getTask
```

```
curl -X POST -H 'X-Amz-Target: AWSCognitoIdentityProviderService.InitiateAuth' -H 'Content-Type: application/x-amz-json-1.1' -d '{ "ClientId" : "6t9r4v57rqmnarol27moa5gppk", "AuthFlow" : "ADMIN_NO_SRP_AUTH", "AuthParameters": { "USERNAME" : "naoki.na17se@gmail.com", "PASSWORD" : "Password1!"} }' https://cognito-idp.ap-northeast-1.amazonaws.com/
```

```
curl -X POST -H 'Content-Type: application/x-amz-json-1.1' -d '{ "ClientId" : "6t9r4v57rqmnarol27moa5gppk", "AuthFlow" : "ADMIN_NO_SRP_AUTH", "AuthParameters": { "USERNAME" : "naoki.na17se@gmail.com", "PASSWORD" : "Password1!"} }' https://cognito-idp.ap-northeast-1.amazonaws.com/
```
