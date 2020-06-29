const router = require('express').Router();
const calledController = require('../controllers/calledController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.get('/views-calleds', authenticateJWT, calledController.viewsCalleds)
router.post('/add-called', authenticateJWT, calledController.addCalled)
router.post('/update-technical', authenticateJWT, calledController.updateTechnical)
router.post('/update-solution', authenticateJWT, calledController.updateSolution)
router.post('/concluded-called', authenticateJWT, calledController.concludedCalled)

module.exports = router;
