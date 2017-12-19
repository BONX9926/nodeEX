const express = require('express'),
    app = express(),
    mysql = require('mysql');

let usersClass = require('./users/users');// เรียกใช้ class 
let binClass = require('./bin/bin');// เรียกใช้ class

//เชื่อมต่อ database
var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'bakery_peaw'
});

app.get('/', (req, res) => {
    let user = new usersClass(con)
    user.getUsers().then((res_server) => {
        res.send(res_server)
    }).catch((err) => {
        res.send(err)
    })
});

app.get('/bin/:id', (req, res) => {
    let bin = new binClass(con)
    let id = req.param('id')

    bin.getBin(id).then((res_server) => {
        res.send(res_server)
    }).catch((err) => {
        res.send(err)
    })

})

app.listen(3000, () => {
    console.log("server start PORT 127.0.0.1:3000");
});


