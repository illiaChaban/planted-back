const pg = require('pg-promise')();

// const dbConfig = {
//     host: 'localhost',
//     port: 5432,
//     database: 'planted',
//     user: 'illia_chaban',
// };


// const { Client } = require('pg');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });
const db = pg(process.env.DATABASE_URL);


// client.connect();

// db.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

module.exports = db;
