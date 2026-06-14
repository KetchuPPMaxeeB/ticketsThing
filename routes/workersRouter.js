const controller = require('../controllers/workersCont'); // вот тут я вспомнил что тут надо контроллер импортировать только потому что я делаю проект аналогичный прошлому. В иных случаях я бы наверное не догадался что нужно что то импортировать
const express = require('express');
const router = express.Router();

router.get('/workers', controller.getAllWorkers);
router.get('/workers/:id', controller.getWorkerByID);
router.post('/workers', controller.createWorker);
router.put('/workers/:id', controller.updateWorker);
router.delete('/workers/:id', controller.deleteWorker);

module.exports = router;