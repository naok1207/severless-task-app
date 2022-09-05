# 認証手順

pattern1
1. フロントから直接cognitoにサインアップを投げる
2. emailを含めたユーザをcognitoに登録
3. confimation mailを送信し、承認時をトリガーとしユーザを作成する（この時cognitoの情報を利用してdynamodb内のユーザの判別を行える情報を同時に保存する）

cognitoにユーザプールはフロント側で管理

pattern2
1.pre sign up で既存ユーザのチェック
2.存在しないユーザの場合登録

バックエンド側で先にAPIを用意しても良い