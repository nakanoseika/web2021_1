const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test3.db");

let sql = `
insert into magicnum ("magic_id","number") values ("15","15");


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
