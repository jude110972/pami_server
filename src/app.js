const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

// middlewares / utilities
const globalErrorHandler = require('./v1/middlewares/globalErrorHandler');

const app = express();

const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: 'Too many request from this IP, please try again in an hour!',
});

app.use('/api', limiter);

app.use(express.static(path.join(__dirname, '..', 'public')));

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

const routes = require('./api_routes');
routes(app);

// the catchUnknownError will use this to handle possible error occured
app.use(globalErrorHandler);

module.exports = app;
