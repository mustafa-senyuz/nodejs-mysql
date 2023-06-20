/* var mysql = require("mysql"); */
import mysql from 'mysql';

var conn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "pass2023.",
    database: "school"
});

conn.connect(function (err) {
    if (err) throw err;

    console.log("Connection is setup ...");


    /*      conn.query("CREATE TABLE musteriler (name VARCHAR(30) , adres  VARCHAR(75))", function (err) {
             if (err) throw err;
             console.log("TABLO OLUSTURULDU...");
         }); */

    var sorgula = "CREATE TABLE IF NOT EXISTS students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30), adres VARCHAR(75))";

    var sorgu = "INSERT INTO students (name , adres) value ?";


    var values = [
        ["mustafa", "HESSEN"],
        ["orhan", "NRW"],
        ["fatih", "BERLIN"],
        ["maho", "HAMBURG"],
        ["hasan", "DRESDEN"],
        ["huseyin", "NORDWW"]
    ];

    conn.query(sorgula);


    conn.query(sorgu, [values], function (err) {
        if (err) throw err;

        console.log("students table is created...");
        console.log("veriler girildi");
    });

    conn.query("SELECT * FROM students", function (err, sonuc) {
        console.log("Tum students tablosu cekildi ... ");
        console.log("==========================================");

        console.log(sonuc);
        console.log("sonuc2 adresi : " + sonuc[2].adres);
    });

    conn.query("SELECT * FROM students WHERE id>3  OR name LIKE '%fa' ", function (err, result) { //name LIKE '%ho'
        if (err) console.log(err);

        console.log(result);
    });

    var ad = "okuzhan";
    var yer = "Bursa";
    var sorgu2 = "SELECT * FROM students WHERE name=? and adres=?";
    conn.query(sorgu2, [ad, yer], function (err, res) {
        if (err) throw err;

        console.log(res);
    });


    var sorgu3 = "DELETE FROM students WHERE id>10";
    conn.query(sorgu3, function (err, resttable) {
        if (err) throw err;

        console.log(resttable);
    });


    /*     var sorgu4 = "ALTER TABLE students ADD COLUMN IF NOT EXISTS nation VARCHAR(50) AFTER adres;";
    
        conn.query(sorgu4, function (err) {
            if (err) throw err;
    
            console.log("A new Column added");
        });
    
        var sorguUPD = "UPDATE students SET nation='turkish'";
    
        conn.query(sorguUPD, function (err) {
            if (err) throw err;
    
            console.log("Column updated");
        }); */

});