const db = require('../data/db-config.js');

module.exports = {
  getProjects,
  getResources
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

//#endregion

//#region - UPDATE

//update

//#endregion

//#region - DELETE

// remove

//#endregion