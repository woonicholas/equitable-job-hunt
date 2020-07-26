module.exports = (app) => {
    const applications = require('./controller.js');

    app.post('/applications', applications.create);

    app.get('/applications', applications.findAll);

    app.get('/applications/unfiltered/:appId', applications.findUnfilteredApp);

    app.get('/applications/filtered/:appId', applications.findFilteredApp);
}