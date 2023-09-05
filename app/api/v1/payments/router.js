const express = require('express');
const router = express();
const {create, index, find, update, destroy} = require('./controller');
const {
	authenticateUser,
	authorizeRoles,
} = require('../../../middlewares/auth');

router.get('/payments', authenticateUser, authorizeRoles('Organizer'), index);
router.get(
	'/payments/:id',
	authenticateUser,
	authorizeRoles('Organizer'),
	find
);
router.put(
	'/payments/:id',
	authenticateUser,
	authorizeRoles('Organizer'),
	update
);
router.delete(
	'/payments/:id',
	authenticateUser,
	authorizeRoles('Organizer'),
	destroy
);
router.post('/payments', authenticateUser, authorizeRoles('Organizer'), create);

module.exports = router;