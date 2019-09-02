const express = require('express');

const ProjectsRouter = require('./api/projects-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);

module.exports = server;