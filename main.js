const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('testDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the testDB database.');
  });

let sqlTotalCities = `SELECT COUNT(name) as total FROM cities`;

// const totalCities = db.all(sqlTotalCities, [], (err, rows) => {
//     if (err) {
//         throw err;
//     }       
//     // rows.forEach((row) => {
//     // totalCities = row.total;
//     // console.log(`Total cities is ${totalCities}!`);

//     // });
//     // console.log(rows[0].total);
//     return rows[0].total;

// });
let x;
console.log(db.each(sqlTotalCities, (err, row)=>{
    console.log(`this is row.total : ${row.total}`);
    return row;
  })
  )

async function getChannelFromID(db) {
    return new Promise((resolve, reject) => {
        db.get(sqlTotalCities,(err, row) => {
            if (err) reject(err); // I assume this is how an error is thrown with your db callback
            console.log(`row total : ${row.total}`);
            // Promise.resolve(row.total);
           return row.total;
        });
    });
}

const xyz = Promise.resolve(getChannelFromID(db));
console.log(">>>>>>>>>>>>>>>>>>"+ xyz);
xyz.then((data) => console.log("???? "+data));

const p = Promise.resolve('bobbyhadz.com');

p.then(value => {
  console.log(value); // 👉️ "bobbyhadz.com"
}).catch(err => {
  console.log(err);
});


// const xyz = await getChannelFromID(db);
// console.log(xyz);
// db.each(sqlTotalCities, (err, row)=>{
//     console.log(`this is row.total : ${row.total}`);
//     // x = row.total;
//     return row;
//   })
//   .then((response) => response.json()).then((user) => {
//     console.log(user.address);
//   });

console.log(`this is x: ${x}`);

    
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

// document.getElementById("demo").innerHTML = myFunction("John");

// close the database connection
db.close();