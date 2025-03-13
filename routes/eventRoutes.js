const express = require('express');
const { createEvent, getEvents, getEventById, deleteEvent } = require('../Controllers/eventController');
const authMiddleware = require('../Middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', authMiddleware, getEvents);
router.get('/:id', authMiddleware, getEventById);
router.delete('/:id', authMiddleware, deleteEvent);

module.exports = router;
