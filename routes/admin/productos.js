var express = require('express');
var router = express.Router();

// var usuariosModel = require('./../../modelos/usuariosModel');


router.get('/', function (req, res, next) {
    res.render('admin/productos', {
        layout: 'admin/layout'
    });
});

module.exports = router;