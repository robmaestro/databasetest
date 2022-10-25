const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    password: "",
    user: "root",
    database: "phlocations",
    host: "localhost",
    port: "3306"
})

let mydb = {}


mydb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM region', (err, results) => {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(results);
            }
        });
    });
};

mydb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM region WHERE region_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(results);
            }
        });
    })
}


mydb.add = (region_name) => {
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO region (region_name) VALUES (?)", [region_name], (err, results) => {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(results);
            }
        });
    })
}

mydb.del = (region_id) => {
    return new Promise((resolve, reject) => {
        pool.query("DELETE FROM region WHERE region_id = ?", [region_id], (err, results) => {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(results);
            }
        });
    })
}

mydb.change = (region_name, region_id) => {
    return new Promise((resolve, reject) => {
        pool.query("UPDATE region SET region_name = ? WHERE region_id = ?", [region_name, region_id], (err, results) => {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(results);
            }
        });
    })
}

module.exports = mydb;