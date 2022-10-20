const express = require("express");
const middleWare = require("./middleware/error");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route Imports
const product = require("./routes/productRoute.js");

app.use("/api/v1", product);

//Middleware for Error
app.use(middleWare);

module.exports = app;
