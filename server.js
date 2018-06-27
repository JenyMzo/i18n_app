'use strict';

const express = require('express');
const port = process.env.PORT || 8080;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const i18n = require('i18n');
const app = express();
// const sessionConfig = require('./session.js');
const config = require('./config.js');

const routes = require('./routes.js');

// sessionConfig(app, cookieParser, session);
config(app, cookieParser, session, i18n);
routes(app, i18n);

app.set('view engine', 'jade');
app.use(express.static('assets'));

app.listen(port);

console.log('Server started on: ' + port);
