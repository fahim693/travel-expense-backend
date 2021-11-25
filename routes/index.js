var express = require("express");
var router = express.Router();
var users = require("./users");
var trips = require("./trips");
var paid_entities = require("./paid_entities");
var entities = require("./entities");

//list of all routes
router.use("/test", users);
router.use("/trip", trips);
router.use("/entity", entities);
router.use("/paid_entity", paid_entities);
router.get("/", function (req, res, next) {
  res.json({
    msg: "Up and Running!",
  });
});

module.exports = router;
