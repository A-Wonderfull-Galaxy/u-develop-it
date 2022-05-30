const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    //your MYSQL username,
    user: 'root',
    //your MySQL password
    password: 'Darkness',
    database: 'election'
});

module.exports = db;