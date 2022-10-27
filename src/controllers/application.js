module.exports = app => {
    const { existsOrError } = app.src.validations

    const save = async (req, res) => {
        const application = { ...req.body }
        if(req.params.id) application.id = req.params.id

        try {
            existsOrError(application.name, 'Nome não informado')
            existsOrError(application.version, 'Versão não informada')
            existsOrError(application.accuracy, 'Acurácia não informada')
            existsOrError(application.n_accesses, 'Número de acessos não informado')

        } catch(msg) {
            return res.status(400).send(msg)
        }

        if(application.id) {
            app.db('applications')
                .update(application)
                .where({ id: application.id })
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('applications')
                .insert(application)
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('applications')
            .select()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}