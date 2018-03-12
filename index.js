var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("build"));

app.get('*', function(req, res){
	res.render("/build/index.html")
})

app.listen(process.env.PORT || 3000, function(){
	console.log("ReactApp Server Running on 3000!");
})