const cdb = require('../models/clientsMod');

async function getAllClients(req, res) {
    const clients = await cdb.getAllClients();
    res.render('clients', { clients: clients });
};

async function getClientByID(req, res) {
    const clients = await cdb.getClientByID(req.params.id);
    res.render('clients', { clients: clients });
};

async function createClient(req, res) {
    const clients = await cdb.createClient(req.body.name, req.body.phone_num);
    res.redirect('/clients');
};

async function updateClient(req, res) {
    const clients = await cdb.updateClient(req.params.id, req.body.name, req.body.phone_num);
    res.redirect('/clients');
};

async function deleteClient(req, res) {
    const clients = await cdb.deleteClient(req.params.id);
    res.redirect('/clients');
};

module.exports = { getAllClients, getClientByID, createClient, updateClient, deleteClient };