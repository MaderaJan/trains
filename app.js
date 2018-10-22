//Modules
const express = require('express');
//const mysql = require('mysql');

let app = express();

//Middleware
app.use(express.static('./public'));

app.get('/', function(req, res){
    res.send('Honzlojova vlaková API');
});

//var conn = mysql.createConnection({
    //host: "35.228.224.194",
    //user : "admin",
    //password : "123456"
//});

/*conn.connect(function(err) {
    if (err) {
        console.log("NEJDEDETEDOD!!"); 
        console.log(err);
    } else {
        console.log("Honzloj hotovka");
    }
});*/

app.listen(3000, function(){
  console.log('Server listen port 3000 ...');
});