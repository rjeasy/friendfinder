// create dependencies
var express = require ("express");
var bodyParser = require ("body-parser");
var path = ("path");


// Link in thml and api routes
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

console.log(htmlRoutes);


// Set up Expess app
var app =express();
var PORT = process.env.PORT || 8080;


// Set up express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


// Server routing map
apiRoutes(app); 
htmlRoutes(app);


// Initiating Listner
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
  
});
