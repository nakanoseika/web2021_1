const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test3.db");

let sql = `
insert into cm ("character_id","magic_id") values ("7","13");


`;

db.serialize(() => {
  db.run(sql, (error, row) => {
    if (error) {
      console.log("Error: ", error);
      return;
    }
    console.log("データを追加しました");
  });
});
