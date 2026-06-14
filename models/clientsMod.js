const pool = require('./pool');

async function getAllClients() {
    const result = await pool.query('SELECT * FROM clients');
    return result.rows;
};

async function getClientByID(id) {
    const result = await pool.query('SELECT * FROM clients WHERE id=$1', [id]);
    return result.rows;
};

async function createClient(name, phone_num) {
    const result = await pool.query('INSERT INTO clients (name, phone_num) VALUES ($1, $2)', [name, phone_num]);
    return result.rows;
};

async function updateClient(id, name, phone_num) {
    const result = await pool.query('UPDATE clients SET name=$1, phone_num=$2 WHERE id=$3', [name, phone_num, id]);
    return result.rows;
};

async function deleteClient(id) {
    const result = await pool.query('DELETE FROM clients WHERE id=$1', [id]);
    return result.rows;
};

module.exports = { getAllClients, getClientByID, createClient, updateClient, deleteClient };