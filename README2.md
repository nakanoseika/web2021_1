# ハリーポッター　呪文データベース
映画内で使用されたものに限定


# テーブル

## characterテーブル

| id | 学生名 | 寮 |
| ---- | ---- | ---- |
| 1 | ハリーポッター | グリフィンドール | 


## magicテーブル

| id | 呪文名 | 効果 | 発動条件 |
| ---- | ---- | ---- | ---- |
| 1 | アバダケダブラ | 瞬間的な痛みのない死 | 


## seriesテーブル

| id | 作品名 |
| ---- | ---- |
| 1 | 賢者の石 |


## relテーブル

| character_id | magic_id | series_id |
| ---- | ---- | ---- |
| 1 | 2 | 3 |