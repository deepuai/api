module.exports = app => {
    app.route('/init')
        .post(app.src.controllers.init.initializeBD)

    app.route('/applications')
        .post(app.src.controllers.application.save)
        .get(app.src.controllers.application.get)

    app.route('/applications/info')
        .get(app.src.controllers.application.getApplicationsFitted)
    
    app.route('/applications/queue')
        .get(app.src.controllers.application.getQueueApplications)

    app.route('/applications/:id/versions')
        .get(app.src.controllers.application.getApplicationVersions)

    app.route('/models')
        .post(app.src.controllers.model.save)
        .get(app.src.controllers.model.get)

    app.route('/datasets')
        .post(app.src.controllers.dataset.save)
        .get(app.src.controllers.dataset.get)

}