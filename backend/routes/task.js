const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');


// GET routes
router.get('/', taskController.getAll);
router.get('/:id', taskController.byId);


// POST routes
router.post('/', taskController.createTask);


// PATCH routes
router.patch('/:id', taskController.editTask);


// DELETE routes
router.delete('/:id', taskController.deleteTask);


module.exports = router;