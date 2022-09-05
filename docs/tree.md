```
.
|─ backend
│   └── src
│       ├── functions # lambdaのfunctionsを管理
│       │   ├── createTask
│       │   │   └── handler.js
│       │   └── getTask
│       │       └── handler.js
│       ├── tables # dynamodbのテーブルを作成する
│       │   ├── task.js
│       │   └── user.js
│       └── utils # 切り分けたい関数を管理
│           ├── Dynamodb.js
│           └── README.md
└── frontend
    └── src
        ├── components // UIを管理
        ├── constants // 定数管理
        ├── hooks // hooksの管理
        │   ├── useAuth // tableごとのhooksを作成
        │   │   ├── index.ts // 複数のアクションをまとめる
        │   │   └── type.ts  // hooks自体のtype
        │   └── useTask
        │       ├── index.ts
        │       └── type.ts
        ├── pages // 画面への出力を行う
        ├── store // recoilのstateを管理する cache
        │   ├── auth
        │   │   ├── index.ts
        │   │   └── type.ts // stateごとのtype
        │   └── task
        │       ├── index.ts
        │       └── type.ts
        ├── types // ライブラリなどで定義されていないtypeがあった際に利用
        └── utils // 切り分けたい関数を管理
            ├── http
            │   └── index.ts
            └── validation
                └── index.ts
```

routesディレクトリの作成
componentsの分割をどうしようか迷ってる
  - buttonなどの汎用パーツ
  - authFormなどの特化パーツ
  - headerなどの固定レイアウト

```
./frontend/src/components
├── general
│   └── Button
│       └── index.ts
├── layouts
│   ├── Footer
│   ├── Header
│   └── MainContainer
└── specialized
    ├── auth
    │   └── authForm.ts
    └── task
        └── taskCreateForm.ts
```
stage3種
- global auth情報など recoilで管理したいのはこいつ
- cache apiの結果のキャッシュ
- local modalが開いたかどうか

後からrecoildから置き換えることを検討しつつ置き換えやすい設計で作ってみる。（global stateからの脱却）

validationは一度functionsを作ってみてから考える（作らないとわからない）
