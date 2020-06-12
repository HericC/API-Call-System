const router = require('express').Router();

const userController = require('../controllers/userController');

router.post('/login', userController.login)
router.post('/add-user', userController.addUser)
router.post('/update-password', userController.updatePassowrd)

module.exports = router;
