const controller = require('../controllers/workersCont');
const express = require('express');
const router = express.Router();

router.get('/workers', controller.getAllWorkersWithStats);
router.get('/workers/:id', controller.getWorkerByID);
router.post('/workers', controller.createWorker);
router.put('/workers/:id', controller.updateWorker);
router.delete('/workers/:id', controller.deleteWorker);

module.exports = router;