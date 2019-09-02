const db = require('../data/db-config.js');

module.exports = {
  getProjects
};

//#region - CREATE

// function add

//#endregion

//#region - READ

// getProjects() - return all projects 
function getProjects() {
  return db('projects');
}

//#endregion

//#region - UPDATE

//update

//#endregion

//#region - DELETE

// remove

//#endregion