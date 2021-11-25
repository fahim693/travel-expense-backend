var express = require("express");
const sequelize = require("../config");
const Sequelize = require("sequelize");
const PaidEntity = require("../models/paid_entities");
const Entity = require("../models/entities");
const Trip = require("../models/trips");
var router = express.Router();

/* POST paid_entities */
router.post("/create_paid_entities", function (req, res, next) {
  PaidEntity.create({
    entity_id: req.body.entity_id,
    expense_name: req.body.expense_name,
    paid_amount: req.body.paid_amount,
  })
    .then(() => {
      sequelize
        .query(
          `SELECT total_entities,id from trips where id = (SELECT trip_id from entities where id=${req.body.entity_id})`,
          {
            model: Trip,
          }
        )
        .then((entity) => {
          const resultSring = JSON.stringify(entity, null, 2);
          const entityResult = JSON.parse(resultSring);

          Entity.update(
            {
              expense: Sequelize.literal(
                "expense + " +
                  req.body.paid_amount / entityResult[0].total_entities
              ),
            },
            {
              where: {
                trip_id: entityResult[0].id,
              },
            }
          ).then(() => {
            res.json({
              status: 200,
              msg: "Successfully updated expense list",
            //   body: result,
            });
          });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
