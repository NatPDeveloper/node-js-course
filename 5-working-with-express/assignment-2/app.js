const express = require('express');
const app = express();
const users = require('./routes/users');
const root = require('./routes/root');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(users);
app.use(root);

app.listen(3000);