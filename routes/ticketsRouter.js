const controller = require('../controllers/ticketsCont');
const express = require('express');
const router = express.Router();

router.get('/tickets', controller.getAllTickets);
router.get('/tickets/:id', controller.getTicketByID);
router.post('/tickets', controller.createTicket);
router.put('/tickets/:id', controller.updateTicket);
router.delete('/tickets/:id', controller.deleteTicket);

module.exports = router;