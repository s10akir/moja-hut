const db = require('../database.js')

class DHT22 {
  constructor() {
    this.db = db
  }

  last(req, res) {
    db.getConnection((err, connection) => {
      if (err) {
        res.send(err)
      } else {
        connection.query(
          `
          SELECT * FROM dht22_logs
              ORDER BY created_at DESC LIMIT 1;
          `,
          (err, rows) => {
            if (!err) {
              res.json(rows)
            } else {
              res.send(err)
            }
            connection.release()
          }
        )
      }
    })
  }

  today(req, res) {
    db.getConnection((err, connection) => {
      if (err) {
        res.send(err)
      } else {
        connection.query(
          `
          SELECT * FROM dht22_logs
              WHERE DATE(created_at) = curdate();
          `,
          (err, rows) => {
            if (!err) {
              res.json(rows)
            } else {
              res.send(err)
            }
            connection.release()
          }
        )
      }
    })
  }
}

module.exports = new DHT22()
