module.exports = app => {
    const { existsOrError } = app.src.validations

    const save = async (req, res) => {
        const model = { ...req.body }
        if(req.params.id) model.id = req.params.id

        try {
            existsOrError(model.name, 'Nome não informado')
            existsOrError(model.n_params, 'Número de parâmetros não informado')
            existsOrError(model.n_layers, 'Número de camadas não informado')
            existsOrError(model.size, 'Tamanho não informado')

        } catch(msg) {
            return res.status(400).send(msg)
        }

        if(model.id) {
            app.db('models')
                .update(model)
                .where({ id: model.id })
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('models')
                .insert(model)
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('models AS m')
            .select('m.id', 'm.name AS model_name', 'm.description', 'm.autors', 'm.n_params', 'm.n_layers', 'm.size', 'm.created_on')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}