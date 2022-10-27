module.exports = app => {
    const initializeBD = (req, res) => {

        app.db('models').insert(
            {
                'name': 'ResNet50',
                'n_params': '25.6M',
                'n_layers': 107,
                'size': '98 MB'
            })
            .then(() => {
                app.db('applications').insert(
                    {
                        'name': 'ResNet50',
                        'version': 'ImageNet',
                        'accuracy': 0.921,
                        'n_accesses': 0,
                        'model_id': 1
                    })
                    .then(() => res.status(204).send())
            })
            .catch(err => res.status(500).send(err))
    }

    return { initializeBD }
}