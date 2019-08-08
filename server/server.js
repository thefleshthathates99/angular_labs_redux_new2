var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path= require('path');
app.use (bodyParser.json());
app.use(express.static(__dirname + '/../dist/week4'));



app.listen(3000, '127.0.0.1', function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been started at: ' + n + ':' + m);

});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/../dist/week4');

})

app.post('/api/auth', function(req,res){

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: window.location + "api/login",
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function(customer){
            console.log("Hit the route")
        },
        error: function(e) {
            alert("Error Achieved")
            console.log("ERROR: ", e);
        }
    });

    // if (!req.body){
    //     return res.sendStatus(400)
    // }

    // let validUsers = [
    //    ["emailDummy@gmail.com.au", "abc123"],
    //    ["emailDhummy@gmail.com.au", "abc123"],
    //    ["emailDyummy@gmail.com.au", "abc123"]
    // ];

    // var customer = {};
    // customer.email = req.body.email;
    // customer.upwd = req.body.upwd;
    // if (req.body.email == "emailDummy@gmail.com.au" && req.body.upwd == "abc123"){
    //     customer.valid = true;
    // }
    // else {
    //     customer.valid = false;
    // }
    // console.log(customer);
    // res.send(customer);
})


    