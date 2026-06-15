const tdb = require('../models/ticketsMod');

async function getAllTickets(req, res) {
    const tickets = await tdb.getAllTickets();
    res.render('tickets', { tickets: tickets });
};

async function getTicketByID(req, res) {
    const ticket = await tdb.getTicketByID(req.params.id);
    res.render('tickets', { ticket: ticket });
};

async function createTicket(req, res) {
    const ticket = await tdb.createTicket(req.body.client_id, req.body.problem, req.body.status, req.body.creation_date);
    res.redirect('/tickets');
};

async function updateTicket(req, res) {
    const ticket = await tdb.updateTicket(req.params.id, req.body.client_id, req.body.problem, req.body.status, req.body.creation_date);
    res.redirect('/tickets');
};

async function deleteTicket(req, res) {
    const ticket = await tdb.deleteTicket(req.params.id);
    res.redirect('/tickets');
};

module.exports = { getAllTickets, getTicketByID, createTicket, updateTicket, deleteTicket };