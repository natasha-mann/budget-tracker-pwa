const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const { connect } = require("./database");
const routes = require("./routes/api");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

connect();

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
