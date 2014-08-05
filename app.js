var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

var log4js = require('log4js');
var logger = log4js.getLogger();


app.set('view engine', 'ejs')
app.set('layout', 'layout') // defaults to 'layout'
app.use(expressLayouts)

app.get('/', function(req, res){
    res.render('index')
});
logger.debug('here')
var server = app.listen(3000, function() {
    logger.info('Listening on port %d', server.address().port);
});