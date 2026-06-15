const pool = require('./pool');

async function getAllVW() {
    const result = await pool.query('SELECT * FROM visits_workers');
    return result.rows;
};

async function getVByWID(worker_id) {
    const result = await pool.query('SELECT visits.* FROM visits JOIN visits_workers ON visits.id = visits_workers.visit_id WHERE visits_workers.worker_id=$1', [worker_id]);
    return result.rows;
};

async function createVW(worker_id, visit_id) {
    const result = await pool.query('INSERT INTO visits_workers (worker_id, visit_id) VALUES ($1, $2)', [worker_id, visit_id]);
    return result.rows;
};

async function updateVW(id, worker_id, visit_id) {
    const result = await pool.query('UPDATE visits_workers SET worker_id=$1, visit_id=$2 WHERE id=$3', [worker_id, visit_id, id]);
    return result.rows;
};

async function deleteVW(id) {
    const result = await pool.query('DELETE FROM visits_workers WHERE id=$1', [id]);
    return result.rows;
};

module.exports = { getAllVW, getVByWID, createVW, updateVW, deleteVW };