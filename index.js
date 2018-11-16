const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const fs = require('fs');

const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.get('/', function (request, response) {
    response.render('pageA');
});

app.get('/pageB', function (request, response) {
    response.render('pageB');
});

app.get('/pageC', function (request, response) {
    response.render('pageC');
});

app.post('/api/count', function (request, response) {
    var url = request.body.url;

    if (url === 'pageA') {
        

    } else if (url === 'pageB') {

    } else if (url === 'pageC') {

    } else {

    }
});

app.listen(5500);