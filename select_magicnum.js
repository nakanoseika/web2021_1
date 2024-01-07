const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test3.db");

let sql = `
select  magic_name, mean, number from magic inner join magicnum on magic.id = magicnum.magic_id
order by number desc;
`;

db.serialize(() => {
  db.all(sql, (error, row) => {
    if (error) {
      console.log("Error: ", error);
      return;
    }
    for (let data of row) {
      console.log(data.magic_name + " : " + data.mean + ":" + data.number);
    }
  });
});
