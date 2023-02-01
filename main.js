const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('testDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the testDB database.');
  });

let sqlTotalCities = `SELECT COUNT(name) as total FROM cities`;

const totalCities = db.all(sqlTotalCities, [], (err, rows) => {
    if (err) {
        throw err;
    }       
    // rows.forEach((row) => {
    // totalCities = row.total;
    // console.log(`Total cities is ${totalCities}!`);

    // });
    // console.log(rows[0].total);
    return rows[0].total;

});

totalCities.then((value) => {
    console.log(value);
    });
    
let ranNum = Math.floor(Math.random()*274)+1;
let sqlRandomCity = `SELECT * FROM cities WHERE rowid = ${ranNum}`;



db.all(sqlRandomCity, [], (err, rows) => {
    if (err) {
        throw err;
    }       
    rows.forEach((row) => {
    console.log(`I come from ${row.name}!`);
    });
});

// close the database connection
db.close();