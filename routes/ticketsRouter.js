const controller = require('../controllers/ticketsCont');
const express = require('express');
const router = express.Router();

router.get('/tickets/new', controller.getNewTicketForm);
router.get('/tickets', controller.getAllTickets);
router.get('/tickets/:id', controller.getTicketByID);
router.post('/tickets/:id', controller.handleVisitCreation);
router.post('/tickets', controller.handleTicketCreation);
router.put('/tickets/:id', controller.updateTicket);
router.delete('/tickets/:id', controller.deleteTicket);

module.exports = router;