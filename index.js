const routerClients = require('./routes/clientsRouter');
const routerWorkers = require('./routes/workersRouter');
const routerTickets = require('./routes/ticketsRouter');
const routerVisits = require('./routes/visitsRouter');
const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use(routerWorkers);
app.use(routerClients);
app.use(routerTickets);
app.use(routerVisits);


app.listen('3000', () => {
    console.log('Server is booted on 3000 port');
});