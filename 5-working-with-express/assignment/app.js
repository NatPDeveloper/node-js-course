const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     if(req.url == '/'){
//         console.log('forward slash');
//     }
//     if(req.url == '/users'){
//         console.log('users');
//     }
//     next();
// })

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/users', (req, res, next) => {
    console.log("users");
    res.send('<p>users</p>');
});

app.use('/', (req, res, next) => {
    console.log("forward slash/");
    res.send('<p>yo</p>');
});

app.listen(3000);