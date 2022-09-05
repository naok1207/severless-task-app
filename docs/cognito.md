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
