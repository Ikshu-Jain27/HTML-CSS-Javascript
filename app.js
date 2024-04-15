const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
   res.sendFile(__dirname + "/signup.html");
});

app.get("/index", function(req, res){
   res.render("index");
})

app.post("/index", function(req, res) {
   const fname = req.body.fname;
   const email = req.body.email;
   const password = req.body.password;
   res.redirect("/index");
});

app.listen(3000, function() {
   console.log("Server is running on port 3000.");
});