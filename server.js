var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

/**
 * Рендеремо сторінку
 *
 * Routing
 * перший параметрр (/contact) -> url
 */
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/public/views/index.html')
});

// Лісенер, який показує результат запуску сервера
app.listen(config.port, function (err) {
    if(err){
        console.log(err);
    }else{
        console.log("Listening on port " + config.port);
    }
});