module.exports.create = function (db) {

  db.run(`DROP TABLE  employee;`, () => {
    db.run(`CREATE TABLE employee (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text NOT NULL,
        phone number NOT NULL UNIQUE,
        address text NOT NULL UNIQUE,
        types_id INTEGER,
        FOREIGN KEY (types_id) REFERENCES types (types_id) 
         ON DELETE CASCADE 
         ON UPDATE NO ACTION
        )`,
      (err) => {
        if (err) console.error(err)
      });
  });

}