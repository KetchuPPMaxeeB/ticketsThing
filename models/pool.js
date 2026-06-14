const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'TicketsBrigade',
    user: 'postgres',
    password: '741011'
});

module.exports = pool;