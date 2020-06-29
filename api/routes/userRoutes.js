const router = require('express').Router();
const userController = require('../controllers/userController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.post('/login', userController.login);
router.post('/add-user', authenticateJWT, userController.addUser);
router.post('/update-password', authenticateJWT, userController.updatePassowrd);

module.exports = router;
