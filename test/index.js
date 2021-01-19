const app = require('../config/express')();
const route = require('./route');

const port = process.env.port || 50000;
app.listen(port, () => {
	console.log(`Server listening at port ${port}`);
	route(app);
});
