const router = require('express').Router();

const calledController = require('../controllers/calledController');

router.get('/views-calleds', calledController.viewsCalleds)
router.post('/add-called', calledController.addCalled)
router.post('/update-technical', calledController.updateTechnical)
router.post('/update-solution', calledController.updateSolution)
router.post('/concluded-called', calledController.concludedCalled)

module.exports = router;
