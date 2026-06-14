const controller = require('../controllers/clientsCont');
const express = require('express');
const router = express.Router();

router.get('/clients', controller.getAllClients);
router.get('/clients/:id', controller.getClientByID);
router.post('/clients', controller.createClient);
router.put('/clients/:id', controller.updateClient);
router.delete('/clients/:id', controller.deleteClient);

module.exports = router;