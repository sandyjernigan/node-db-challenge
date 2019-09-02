const express = require('express');

const ProjectsRouter = require('./api/projects-router.js');
const ResourcesRouter = require('./api/resources-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);

module.exports = server;