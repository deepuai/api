module.exports = app => {
    app.route('/init')
        .post(app.src.controllers.init.initializeBD)

    app.route('/applications')
        .post(app.src.controllers.application.save)
        .get(app.src.controllers.application.get)

    app.route('/models')
        .post(app.src.controllers.model.save)
        .get(app.src.controllers.model.get)

}