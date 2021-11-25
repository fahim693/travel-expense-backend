var express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var sequelize = require("./config");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
const port = process.env.PORT;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);

if (sequelize.authenticate()) {
  console.log("Connection has been established successfully.");
  app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
  });
} else {
  console.log("Could not connect");
}

module.exports = app;
