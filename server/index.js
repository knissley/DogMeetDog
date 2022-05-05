const express = require('express');
const app = express();
const port = 3500;
const controllers = require('./controllers');

app.use(express.json());

// Users
app.get('/users/:user_email', controllers.users.getAll);
app.post('/users', controllers.users.createOne);

// Pets
app.get('/pets', controllers.pets.getAll);

// Chat Rooms
app.get('/chats/:user_id', controllers.chats.getAll);
app.post('/chats/', controllers.chats.createChat);

// Messages
app.get('/messages/:chat_id', controllers.messages.getAll);
app.post('/messages/', controllers.messages.createMessage);


app.listen(port);
console.log('Listening at: ', port);