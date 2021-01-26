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
})

module.exports = router();