const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test3.db");

let sql = `
insert into magic ("magic_name","mean") values ("エクスぺりアムス","武器よ去れ");


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
