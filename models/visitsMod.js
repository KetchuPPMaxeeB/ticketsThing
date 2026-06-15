const pool = require('./pool');

async function getAllVisits() {
    const result = await pool.query('SELECT * FROM visits');
    return result.rows;
};

async function getVisitByID(id) {
    const result = await pool.query('SELECT * FROM visits WHERE id=$1', [id]);
    return result.rows;
};

async function createVisit(ticket_id, visit_date) {
    const result = await pool.query('INSERT INTO visits (ticket_id, visit_date) VALUES ($1, $2)', [ticket_id, visit_date]);
    return result.rows;
};

async function updateVisit(id, ticket_id, visit_date) {
    const result = await pool.query('UPDATE visits SET ticket_id=$1, visit_date=$2 WHERE id=$3', [ticket_id, visit_date, id]);
    return result.rows;
};

async function deleteVisit(id) {
    const result = await pool.query('DELETE FROM visits WHERE id=$1', [id]);
    return result.rows;
};

module.exports = { getAllVisits, getVisitByID, createVisit, updateVisit, deleteVisit };