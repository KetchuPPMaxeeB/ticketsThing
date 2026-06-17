const { render } = require('ejs');
const tdb = require('../models/ticketsMod');
const cdb = require('../models/clientsMod');
const wdb = require('../models/workersMod');
const vdb = require('../models/visitsMod');
const vwdb = require('../models/visits_workersMod');

async function getAllTickets(req, res) {
    const tickets = await tdb.getAllTickets();
    res.render('tickets', { tickets: tickets });
};

async function getTicketByID(req, res) {
    const ticket = await tdb.getTicketByID(req.params.id);
    const client = await cdb.getClientByID(ticket[0].client_id);
    const workers = await wdb.getAllWorkersWithStats();
    res.render('ticketMore', { ticket: ticket, client: client, workers: workers });
};

async function createTicket(req, res) {
    const ticket = await tdb.createTicket(req.body.client_id, req.body.problem, req.body.status, req.body.creation_date);
    res.redirect('/tickets');
};
async function handleTicketCreation(req, res) {
    const client_id = await cdb.createClient(req.body.name, req.body['phone-num']);
    const ticket = await tdb.createTicket(client_id[0].id, req.body['ticket-problem']);
    res.redirect('/tickets');
};
async function handleVisitCreation(req, res) {
    const visit = await vdb.createVisit(req.params.id);
    const vw = await vwdb.createVW(req.body.workers, visit[0].id);
    await tdb.updateTicketStatus(req.params.id, 'Ожидание');
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

async function getNewTicketForm(req, res) {
    res.render('ticketForm');
};

module.exports = { getAllTickets, getTicketByID, createTicket, updateTicket, deleteTicket, getNewTicketForm, handleTicketCreation, handleVisitCreation };