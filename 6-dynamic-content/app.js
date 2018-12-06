const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorPage = require('./routes/error');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes)
app.use(errorPage);

app.listen(3000);