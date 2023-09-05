const express = require("express");
const router = express();
const { create, index ,find, update, destroy } = require('./controller');
const {
    authenticateUser,
    authorizeRoles,
} = require('../../../middlewares/auth')

router.get('/categories', authenticateUser, authorizeRoles('Organizer'), index);
router.get(
    '/categories/:id', 
    authenticateUser,
    authorizeRoles('Organizer'),
    find
    );
router.put(
    '/categories/:id',
    authenticateUser,
    authorizeRoles('Organizer'),
    update
    );
router.delete(
    '/categories/:id', 
    authenticateUser, 
    authorizeRoles('Organizer'), 
    destroy
    );
router.post(
    '/categories', 
    authenticateUser, 
    authorizeRoles('Organizer'), 
    create
    );

module.exports = router;
