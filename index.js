const express = require('express');
const app = express();
app.use(express.json());

app.set('view engine', 'ejs'); //это я на сайте посмотрел каком то

app.listen('3000', () => {
    console.log('Server is booted on 3000 port');
});