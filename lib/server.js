'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    app = express();

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));
}

app.use(express.static('public'));

// to extract form data from POST bodies
app.use(bodyParser.urlencoded({ extended: true }));

// app.set('view engine', 'pug');
// app.set('views', './views');

app.get('/:name', function(request, response) {
  response.end('Hello, ' + request.params.name + '!');
});

// allow other modules to use the server
module.exports = app;
