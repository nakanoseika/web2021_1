const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
select character.`name` AS `character_name`,
  magic.`magic_name` AS `magic_name`,
  series.`magic_name` AS `series_name`,
FROM
    `sales_history` s
JOIN `customers` c ON s.`customer_id` = c.`id`
JOIN `products` p ON s.`product_id` = p.`id`; ;
`

db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    for( let data of row ) {
      console.log( data.id + ' : ' + data.name + ' : ' + data.dormitory );
    }
  });
});
