const router = require('express').Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.home)
router.get('/views-sectors', homeController.viewsSectors)
router.get('/views-equipment/:id', homeController.viewsEquipment)

module.exports = router;
