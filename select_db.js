const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
select character.id as character_id,
character.name, magic.id as magic_id,
magic.magic_name
from cm
join character on cm.character_id = character.id
join magic on cm.magic_id = magic.id
where character.id = 3;
`

db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    for( let data of row ) {
      console.log(   data.name + ' : '+ data.magic_id + data.magic_name );
    }
  });
});
