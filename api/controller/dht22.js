const db = require('../database.js')

class DHT22 {
  constructor() {
    this.db = db
  }

  last(req, res) {
    db.query(
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
      }
    )
  }
}

module.exports = new DHT22()
