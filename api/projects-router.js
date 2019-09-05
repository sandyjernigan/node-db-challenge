const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

//#region - CREATE

// add Project
router.post('/', async (req, res) => {
  const input = req.body;

  try {
    const results = await Projects.addProject(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new project' });
  }
});

// add Task with Project ID
router.post('/:id/tasks', async (req, res) => {
  const { id } = req.params; 
  const input = {...req.body, 'project_id': id};

  try {
    const results = await Projects.addTask(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new task' });
  }
});

// add Resource with Project ID
router.post('/:id/resources', async (req, res) => {
  const { id } = req.params; 
  const input = req.body;

  try {
    const results = await Projects.addResource(input);
    const resource_id = results.id
    try {
    const reference = {'resources_id': resource_id, 'project_id': id};
    const resultsReference = await Projects.addProjectResource(reference);
    res.status(201).json(results);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create reference' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new resource' });
  }
});

//#endregion

//#region - READ

// GET
router.get('/', async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects.' });
  }
});

// GET by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Projects.getProjectByID(id);

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find the project' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get project' });
  }
});

// GET by id with tasks
router.get('/:id/tasks', async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Projects.getTasksByProject(id);

    if (project.length) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find the project' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get project' });
  }
});


//#endregion

//#region - UPDATE
router.put('/:id', async (req, res) => {});

//#endregion

//#region - DELETE
router.delete('/:id', async (req, res) => {});
//#endregion

//#region - Custom Middleware
//#endregion

module.exports = router;