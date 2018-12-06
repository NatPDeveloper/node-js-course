const express = require('express');
const path = require('path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.render('shop', {prods: products, docTitle: "My Shop"});
});

module.exports = router;