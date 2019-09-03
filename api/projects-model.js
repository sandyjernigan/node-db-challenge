const db = require('../data/db-config.js');

module.exports = {
  addProject, 
  addTask, 
  addResource, 
  addProjectResource, 
  getProjects, 
  getResources, 
  getProjectByID, 
  getResourceByID, 
  getTasksByProject
};

//#region - CREATE

async function addProject(input) {
  const ids = await db('projects').insert(input);
  return getProjectByID(ids[0]);
}

async function addTask(input) {
  const ids = await db('tasks').insert(input);
  return getTasksByID(ids[0]);
}

async function addResource(input) {
  const ids = await db('resources').insert(input);
  return getResourceByID(ids[0]);
}

function addProjectResource(input) {
  return db('projects_resources').insert(input)
}


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
  return db('projects').where({ id }).first();
}

// getResourceByID() - return a resource 
function getResourceByID(id) {
  return db('resources').where({ id }).first();
}

// getResourceByID() - return a resource 
function getTasksByID(id) {
  return db('tasks').where({ id }).first();
}

// getProjectTasks - returns task database based on the project id
function getTasksByProject(id) {
  return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select(
      'projects.project_name as name', 
      'projects.project_description as description', 
      'projects.project_completed',
      'tasks.task_description as description', 
      'tasks.task_notes as notes', 
      'tasks.task_completed'
      )
    .orderBy('tasks.id')
    .where({ 'tasks.project_id': id });
}

//#endregion

//#region - UPDATE

//update

//#endregion

//#region - DELETE

// remove

//#endregion