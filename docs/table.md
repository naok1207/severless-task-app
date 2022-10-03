```
User
  ├── Task     # タスク情報
  ├── Category # タスクのカテゴリ
  └── Setting  # ユーザの設定
```
** Task **
- title
- description
- category
- status
- SubTask

** SubTask **
- title
- description
- status

** Category **
- name
- description

例: work study private

** Setting **
- theme

```json
{
  "users": [
    {
      "id": 1,
      "name": "test1",
      "settings": {
        "params:": "a",
      },
    },
    {
      "id": 2,
      "name": "test2",
    }
  ],
  "task": [
    {
      "id"
    }
  ],
  "setting": [
    {
      "userId": 1,
      "params:": "a",
    }
  ]
}
```


## 設計について
1. パーティションキー
user_idなど特定のデータをまとめる情報を入れる

2. ソートキー
データ固有の情報を入れる
パーティションキーに加えてソートキーを作成することで、複合キーとして使え、パーティションキーで区切った情報の後の検索に使用できる
（検索には必ずパーティションキーが必要になる）

3.


[What is GlobalSecondary Index & etc..]
https://blog.usize-tech.com/table-design-for-amazon-dynamodb/

[Projection Type]
https://qiita.com/yShig/items/177ea3395a819aa3e780
