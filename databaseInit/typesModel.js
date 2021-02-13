module.exports.create = function (db) {
  db.run(`CREATE TABLE type (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(45) NOT NULL
        )`,
    (err) => {
      if (err) console.error(err)
    });
}