const router = require('express').Router();
const userController = require('../controllers/userController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.post('/login', userController.login);
router.post('/add-user', authenticateJWT, userController.addUser);
router.post('/update-password', authenticateJWT, userController.updatePassowrd);

router.post('/auth-status', authenticateJWT, (req, res) => { return res.json({ 'auth': true }) });

module.exports = router;
