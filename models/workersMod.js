const pool = require('./pool');

async function getWorkerByID(id) {
    const result = await pool.query('SELECT * FROM workers WHERE id=$1', [id]);
    return result.rows;
};

async function createWorker(name, profession, salary) {
    const result = await pool.query('INSERT INTO workers (name, profession, salary) VALUES ($1, $2, $3)', [name, profession, salary]);
    return result.rows;
};

async function updateWorker(id, name, profession, salary) {
    const result = await pool.query('UPDATE workers SET name=$1, profession=$2, salary=$3 WHERE id=$4', [name, profession, salary, id]);
    return result.rows;
};

async function deleteWorker(id) {
    const result = await pool.query('DELETE FROM workers WHERE id=$1', [id]);
    return result.rows;
};

async function getAllWorkersWithStats() {
    const result = await pool.query('SELECT workers.*, COUNT(visits_workers.visit_id) as visits_count FROM workers LEFT JOIN visits_workers ON workers.id = visits_workers.worker_id GROUP BY workers.id');
    return result.rows;
};

module.exports = { getWorkerByID, createWorker, updateWorker, deleteWorker, getAllWorkersWithStats };