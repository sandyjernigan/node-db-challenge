const express = require('express');

const RecipeRouter = require('./api/projects-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', RecipeRouter);

module.exports = server;