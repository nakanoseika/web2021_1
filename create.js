const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test3.db");

let schema = `
create table magicnum(
  id integer primary key,
  magic_id integer,
  number integer,
  foreign key (magic_id) references magic(id)
   
);
`;

db.serialize(() => {
  db.run(schema, (error, row) => {
    if (error) {
      console.log("Error: ", error);
      return;
    }
    console.log("テーブルを作成しました");
  });
});
