const express = require('express');
const app = express();
const port = 3500;
const controllers = require('./controllers');

app.use(express.json());

app.get('/users/:user_id', controllers.users.getAll);



app.listen(port);
console.log('Listening at: ', port);