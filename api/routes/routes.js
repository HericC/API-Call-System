const router = require('express').Router();
const homeController = require('../controllers/homeController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.get('/', homeController.home);
router.get('/views-sectors', authenticateJWT, homeController.viewsSectors);
router.get('/views-equipment/:id', authenticateJWT, homeController.viewsEquipment);

module.exports = router;
