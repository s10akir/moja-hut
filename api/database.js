require('dotenv').config()

const mysql = require('mysql')

const db = mysql.createConnection({
  host: process.env.MYSQL_HOSTNAME,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

db.connect()

module.exports = db
