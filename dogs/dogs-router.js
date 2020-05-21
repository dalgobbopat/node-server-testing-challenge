const express = require("express");
const Dogs = require("./dogs-model.js");

const router = express.Router();

router.get('/', async (req, res, next) =>{
    try {
        res.json(await Dogs.find());
    } catch (err) {
        next(err);
    }
})

module.exports = router;