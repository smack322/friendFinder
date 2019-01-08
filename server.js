//define dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

var app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routing/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });