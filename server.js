const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());

const db = mysql.createConnection({
    port : 3001,
    password:"",
    database:"noire-collection",
    user:"root",
    host:"127.0.0.1"
});

app.get("/", (req,res)=>{
    res.send("Fut a backend!");
});

app.listen(3001, ()=> {
    console.log("Fut a szervers")
});

app.get("/ruhak", (req,res)=>{
    const sql = "SELECT * FROM termekek";
    db.query(sql, (err,result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
});