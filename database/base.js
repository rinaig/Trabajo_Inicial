const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'fullstack'
  })

conn.connect((err) => {
   if (err) throw err;
   console.log("¡Hemos Logrado conectar la Base!");
});

module.exports = conn;