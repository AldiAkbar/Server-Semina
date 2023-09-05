const express = require('express');
const router = express();
const { create, index, find, update, destroy, changeStatus } = require('./controller');

const {
    authenticateUser,
    authorizeRoles,
} = require('../../../middlewares/auth');

router.get('/events', authenticateUser, authorizeRoles('Organizer'), index);
router.get('/events/:id', authenticateUser, authorizeRoles('Organizer'), find);
router.put('/events/:id', authenticateUser, authorizeRoles('Organizer'), update);
router.delete('/events/:id', authenticateUser, authorizeRoles('Organizer'), destroy);
router.post('/events', authenticateUser, authorizeRoles('Organizer'), create);
router.put('/events/:id/status', authenticateUser, authorizeRoles('Organizer'), changeStatus);

module.exports = router;