const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const fs = require('fs');

const app = express();

var pageA__views = 0;
var pageB__views = 0;
var pageC__views = 0;

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
        pageA__views += 1;
        console.log(pageA__views);
    } else if (url === 'pageB') {
        pageB__views += 1;
        console.log(pageB__views)
    } else if (url === 'pageC') {
        pageC__views += 1;
        console.log(pageC__views);
    } else {

    }

    var txt = [];
    txt[0] = 'Página A: ' + pageA__views + ' visitas   ';
    txt[1] = 'Página B: ' + pageB__views + ' visitas   ';
    txt[2] = 'Página C: ' + pageC__views + ' visitas   ';

    fs.writeFileSync("TXT/visitas.txt", txt);
});

app.listen(5500);