const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
select id, character_id, magic_id  from cm ;
`

db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    for( let data of row ) {
      console.log( data.id + ' : ' + data.character_name+ ' : ' + data.magic_name  );
    }
  });
});