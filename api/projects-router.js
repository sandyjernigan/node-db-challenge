const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

//#region - CREATE
router.post('/', async (req, res) => {});

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

    if (project.length) {
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