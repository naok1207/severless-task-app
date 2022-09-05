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
