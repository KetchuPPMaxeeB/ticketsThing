const wdb = require('../models/workersMod');

async function getAllWorkers(req, res) {
    const workers = await wdb.getAllWorkers;
    res.render('workers', { workers: workers });
};

async function getWorkerByID(req, res) {
    const worker = await wdb.getWorkerByID;
    res.render('workers', { worker: worker });
};

async function createWorker(req, res) {
    const worker = await wdb.createWorker;
    res.redirect('/workers'); //тут правильно? Я направляю на страницу со всеми работниками или на отдельную страницу чтобы он увидел как это все выглядит?
};

async function updateWorker(req, res) {
    const worker = await wdb.updateWorker;
    res.redirect('/workers');
};

async function deleteWorker(req, res) {
    const worker = await wdb.deleteWorker;
    res.redirect('/workers');
};

module.exports = { getAllWorkers, getWorkerByID, createWorker, updateWorker, deleteWorker };