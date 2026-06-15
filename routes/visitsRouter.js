const controller = require('../controllers/visitsCont');
const express = require('express');
const router = express.Router();

router.get('/visits', controller.getAllVisits);
router.get('/visits/:id', controller.getVisitByID);
router.post('/tickets/:ticket_id/visits', controller.createVisit);
router.put('/visits/:id', controller.updateVisit);
router.delete('/visits/:id', controller.deleteVisit);

module.exports = router;