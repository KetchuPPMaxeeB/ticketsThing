const wdb = require('../models/workersMod');

async function getAllWorkersWithStats(req, res) {
    const workers = await wdb.getAllWorkersWithStats();
    res.render('workers', { workers: workers });
};

async function getWorkerByID(req, res) {
    const worker = await wdb.getWorkerByID(req.params.id);
    res.render('workers', { worker: worker });
};

async function createWorker(req, res) {
    const worker = await wdb.createWorker(req.body.name, req.body.profession, req.body.salary);
    res.redirect('/workers');
};

async function updateWorker(req, res) {
    const worker = await wdb.updateWorker(req.params.id, req.body.name, req.body.profession, req.body.salary);
    res.redirect('/workers');
};

async function deleteWorker(req, res) {
    const worker = await wdb.deleteWorker(req.params.id);
    res.redirect('/workers');
};

module.exports = { getAllWorkersWithStats, getWorkerByID, createWorker, updateWorker, deleteWorker };