const vdb = require('../models/visitsMod');
const vwdb = require('../models/visits_workersMod');

async function getAllVisits(req, res) {
    const visits = await vdb.getAllVisits();
    res.render('visits', { visits: visits });
};

async function getVisitByID(req, res) {
    const visit = await vdb.getVisitByID(req.params.id);
    res.render('visits', { visit: visit });
};

async function createVisit(req, res) {
    const visit = await vdb.createVisit(req.params.ticket_id, req.body.visit_date);
    await vwdb.createVW(visit[0].id, req.body.worker_id);
    res.redirect('/visits');
};

async function updateVisit(req, res) {
    const visit = await vdb.updateVisit(req.params.id, req.body.ticket_id, req.body.visit_date);
    res.redirect('/visits');
};

async function deleteVisit(req, res) {
    const visit = await vdb.deleteVisit(req.params.id);
    res.redirect('/visits');
};

module.exports = { getAllVisits, getVisitByID, createVisit, updateVisit, deleteVisit };