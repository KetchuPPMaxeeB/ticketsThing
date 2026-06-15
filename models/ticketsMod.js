const pool = require('./pool');

async function getAllTickets() {
    const result = await pool.query('SELECT * FROM tickets');
    return result.rows;
};

async function getTicketByID(id) {
    const result = await pool.query('SELECT * FROM tickets WHERE id=$1', [id]);
    return result.rows;
};

async function createTicket(client_id, problem, status) {
    const result = await pool.query('INSERT INTO tickets (client_id, problem, status, creation_date) VALUES ($1, $2, $3, NOW())', [client_id, problem, status]);
    return result.rows;
};

async function updateTicket(id, client_id, problem, status) {
    const result = await pool.query('UPDATE tickets SET client_id=$1, problem=$2, status=$3, creation_date=NOW() WHERE id=$4', [client_id, problem, status, id]);
    return result.rows;
};

async function deleteTicket(id) {
    const result = await pool.query('DELETE FROM tickets WHERE id=$1', [id]);
    return result.rows;
};

module.exports = { getAllTickets, getTicketByID, createTicket, updateTicket, deleteTicket };