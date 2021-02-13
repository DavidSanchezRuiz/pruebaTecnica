module.exports.create = function (db) {

  db.run(`DROP TABLE  contract;`, () => {
    db.run(`CREATE TABLE contract (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(45) NOT NULL,
        date DATE NOT NULL,
        file VARCHAR(45) NOT NULL,
        employees_id BIGINT(20),
        FOREIGN KEY (employees_id) REFERENCES employees (employees_id) 
         ON DELETE CASCADE 
         ON UPDATE NO ACTION
        )`,
      (err) => {
        if (err) console.error(err)
      });
  });

}