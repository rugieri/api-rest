const UserController = require('../Controllers/UserController')

module.exports = (app) => {
    app.post('/user', UserController.post);
    app.put('/user/:id', UserController.put);
    app.delete('/user/:id', UserController.delete);
    app.get('/user', UserController.get);
    app.get('/user/:id', UserController.getById);
};