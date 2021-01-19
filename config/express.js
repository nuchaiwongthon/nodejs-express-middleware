const express = require('express');
const bodyParser = require('body-parser');

const app = express();

module.exports = () => {
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
		return next();
	});
	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
	// parse application/json
	app.use(bodyParser.json({ limit: '100mb' }));

	return app;
};
