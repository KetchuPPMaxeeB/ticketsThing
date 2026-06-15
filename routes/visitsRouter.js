const controller = require('../controllers/visitsCont');
const express = require('express');
const router = express.Router();

router.get('/visits', controller.getAllVisits);
router.get('/visits/:id', controller.getVisitByID);
router.post('/tickets/:ticket_id/visits', controller.createVisit);
router.put('/visits', controller.updateVisit);
router.delete('/visits', controller.deleteVisit);

module.exports = router;