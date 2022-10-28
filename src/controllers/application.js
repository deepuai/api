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
            .then(applications => res.json(applications))
            .catch(err => res.status(500).send(err))
    }

    const getAllInfo = (req, res) => {
        app.db('applications AS a')
            .select(
                'a.id AS applications_id', 'a.name AS application_name', 'a.version', 'a.accuracy', 'a.n_accesses', 'a.parent_id as parent_application_id',
                'm.id AS model_id', 'm.name AS model_name', 'm.n_params', 'm.n_layers', 'm.size as model_size',
                'd.id AS dataset_id', 'd.name AS dataset_name', 'd.size AS dataset_size', 'd.n_images', 'd.n_classes', 'd.images'
            )
            .join('models as m', 'a.model_id', '=', 'm.id')
            .join('datasets as d', 'a.dataset_id', '=', 'd.id')
            .then(applications => res.json(applications))
            .catch(err => res.status(500).send(err))
    }

    const getApplicationVersions = (req, res) => {
        const applicationId = req.params.id
        app.db.raw(`
            WITH RECURSIVE app_version (id, parent_id, depth, version_history) AS 
            (
                SELECT highest_app.id, highest_app.parent_id, 1::INT AS depth, highest_app.version::TEXT AS version_history 
                FROM applications AS highest_app
                WHERE highest_app.parent_id IS NULL
                UNION ALL
                SELECT sub_app.id, sub_app.parent_id, current_app.depth + 1 AS depth, 
                    (current_app.version_history || ' -> ' || sub_app.version::TEXT)
                FROM app_version AS current_app, applications AS sub_app 
                WHERE sub_app.parent_id = current_app.id
           )
           SELECT id, version_history FROM app_version WHERE app_version.id = ?
            `
            , applicationId)
            .then(applications => {
                res.json(applications.rows)
            })
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getAllInfo, getApplicationVersions }
}