const controller = require('./controller');
const middleware = require('../config/middleware');

module.exports = (app) => {
    app.post('/', middleware, controller.validate);
    app.post('/signIn', controller.signIn);
};
