const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  burger.all((data) => {
    const handlebarsObj = {
      burgers: data,
    };
    console.log(handlebarsObj);
    res.render("index", handlebarsObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(

    { burger_name: req.body.burger_name, devoured: false },
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id/devoured", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.value };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
