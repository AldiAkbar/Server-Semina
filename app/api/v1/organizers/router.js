const express = require('express');
const router = express();
const { 
    createCMSOrganizer,
     createCMSUser,
      getCMSUsers, 
    } = require('./controller');

const {
    authenticateUser,
    authorizeRoles,
} = require('../../../middlewares/auth')

router.post(
    '/organizers', 
    authenticateUser, 
    authorizeRoles('Owner'), 
    createCMSOrganizer
    );
router.post(
    '/users', 
    authenticateUser, 
    authorizeRoles('Organizer'),
    createCMSUser
    );

    router.get('/users', authenticateUser, authorizeRoles('Owner'), getCMSUsers);

module.exports = router;