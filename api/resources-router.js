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
    const resources = await Projects.getResources();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get resources.' });
  }
});

// GET by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
  } catch (err) {
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