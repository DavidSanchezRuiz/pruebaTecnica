module.exports.create = function (db) {

  db.run(`DROP TABLE  employee;`, () => {
    db.run(`CREATE TABLE employee (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(45),
        phone INT UNIQUE,
        address VARCHAR(45) UNIQUE,
        types_id BIGINT(20),
        FOREIGN KEY (types_id) REFERENCES types (types_id) 
         ON DELETE CASCADE 
         ON UPDATE NO ACTION
        )`,
      (err) => {
        if (err) console.error(err)
      });
  });

}