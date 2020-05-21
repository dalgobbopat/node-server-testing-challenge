const express = require('express');
const dogsRouter = require("./dogs/dogs-router");
const server = express();

server.use(express.json());

server.use('/dogs', dogsRouter);

server.get('/', (req,res) => {
    res.json({
        message: "API up"
    });
});

module.exports = server;