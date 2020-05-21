const express = require("express");
const Dogs = require("./dogs-model.js");

const router = express.Router();

router.get('/', async (req, res, next) =>{
    try {
        res.json(await Dogs.find());
    } catch (err) {
        next(err);
    };
});

router.post('/', async (req,res,next) => {
    try {
        const dogs = await Dogs.create(req.body);
        res.status(201).json(dogs);
    } catch (err){
      next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
      await Dogs.remove(req.params.id);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;

