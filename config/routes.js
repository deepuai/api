module.exports = app => {
    app.route('/applications')
        .post(app.src.controllers.application.save)
        .get(app.src.controllers.application.get)
}