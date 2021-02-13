module.exports.create = function (db) {
  db.run(`CREATE TABLE type (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text NOT NULL
        )`,
    (err) => {
      if (err) console.error(err)
    });
}