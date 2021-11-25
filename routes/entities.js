var express = require("express");
const Entity = require("../models/entities");
var router = express.Router();

/* POST entities */
router.post("/create_entities", function (req, res, next) {
  Entity.bulkCreate(req.body.entities).then((result) => {
    res.json({
      status: 200,
      msg: "Entities successfully created",
      body: result,
    });
  }).catch(err=>{
      console.log(err);
  });
});

module.exports = router;
