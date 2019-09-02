const db = require('../data/db-config.js');

module.exports = {
  getProjects,
  getResources,
  getProjectByID,
  getResourceByID
};

//#region - CREATE

// function add

//#endregion

//#region - READ

// getProjects() - return all projects 
function getProjects() {
  return db('projects');
}

// getResources() - return all resources 
function getResources() {
  return db('resources');
}

// getProjectByID() - return a project
function getProjectByID(id) {
  return db('projects')
    .where({ id });
}

// getResourceByID() - return a resource 
function getResourceByID(id) {
  return db('resources')
    .where({ id });
}

//#endregion

//#region - UPDATE

//update

//#endregion

//#region - DELETE

// remove

//#endregion