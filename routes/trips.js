var express = require("express");
const Trip = require("../models/trips");
var router = express.Router();

/* POST trips */
router.post("/create_trip", function (req, res, next) {
  Trip.create({
    trip_name: req.body.trip_name,
    total_entities: req.body.total_entities,
  })
    .then((result) => {
      res.json({
        status: 200,
        msg: "Trip successfully created",
        body: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   sequelize.query("select * from test").then((result) => {
//     const resultSring = JSON.stringify(result, null, 2);
//     const test = JSON.parse(resultSring);
//     res.json({
//       msg: JSON.stringify(test),
//     });
//   });
// });

module.exports = router;
