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
    burger.create({ burger_name: req.body.burger_name, devoured: req.body.devoured }, (result) => {
        res.json({ id: result.insertId });
    });
});



module.exports = router;