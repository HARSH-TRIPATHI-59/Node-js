// express framwork for node.js
// usage => routing

//routing => GET, POST, put,patch , delete
//GET POST

// GET => data is visible on the url or tab
//POST => data is not visible on the url or tab

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/Profile", function (req, res) {
    res.send("Hello from Profile");
  });

app.listen(3000);
