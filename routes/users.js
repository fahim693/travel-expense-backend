var express = require("express");
const sequelize = require("../config");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  sequelize.query("select * from test").then((result) => {
    const resultSring = JSON.stringify(result, null, 2);
    const test = JSON.parse(resultSring);
    res.json({
      msg: JSON.stringify(test),
    });
  });
});

module.exports = router;
