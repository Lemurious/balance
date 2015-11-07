/* Dependencies */

var express = require("express");
var errorhandler = require("errorhandler");
var favicon = require("serve-favicon");
var morgan = require("morgan");
var http = require("http");
var path = require("path");

var app = module.exports = express();

/* Configuration */

var env = process.env.NODE_ENV || "development";
app.set("env", env);
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));

// Development only
if (env === "development") {
  app.use(errorhandler());
  app.set("json spaces", 2);
}

// Production only
if (env === "production") {
  app.set("x-powered-by", false);
}

/* Routes */

app.use("/build", express.static(path.join(__dirname, "/../build")));
app.use("/assets", express.static(path.join(__dirname, "/../client/assets")));
app.use(favicon(path.join(__dirname, "/../client/assets/favicon.ico")));


// Map "/" and urls like "/balance" to index.html
app.get(/^\/[^/]*$/, function (req, res) {
  res.sendFile("index.html", {
    root: path.resolve(__dirname + "/../client")
  });
});

/** Start Server **/
app.listen(app.get("port"), function () {
  console.log("Server listening on http://127.0.0.1:" + app.get("port"));
});
