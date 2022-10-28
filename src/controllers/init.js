module.exports = app => {

    const initializeBD = async (req, res) => {

        await app.db('models').insert(
            {
                'name': 'ResNet50',
                'description': 'Arquitetura de rede neural baseada no framework de aprendizado residual.',
                'autors': 'Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun',
                'n_params': '25.6M',
                'n_layers': 107,
                'size': '? MB',
                'created_on': '2015'
            })
        await app.db('datasets').insert(
            {
                'name': 'Imagens de Animais',
                'size': '12M',
                'n_images': 10,
                'n_classes': 5,
                'images': JSON.stringify([
                    'https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2017/02/18/13/55/swan-2077219_960_720.jpg',
                    'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_960_720.jpg'
                ])
            })
        await app.db('applications').insert(
            {
                'name': 'ResNet50',
                'version': 'ImageNet',
                'accuracy': 0.921,
                'n_accesses': 0,
                'model_id': 1,
                'dataset_id': 1
            })
        await app.db('applications').insert(
            {
                'parent_id': 1,
                'name': 'ResNet50-versao-1a',
                'version': 'ABCDEFGH',
                'accuracy': 0.921,
                'n_accesses': 0,
                'model_id': 1,
                'dataset_id': 1
            })
        await app.db('applications').insert(
            {
                'parent_id': 1,
                'name': 'ResNet50-versao-1b',
                'version': 'XYZAPQYT',
                'accuracy': 0.921,
                'n_accesses': 0,
                'model_id': 1,
                'dataset_id': 1
            })
        await app.db('applications').insert(
            {
                'parent_id': 2,
                'name': 'ResNet50-versao-1a1',
                'version': '12345678',
                'accuracy': 0.921,
                'n_accesses': 0,
                'model_id': 1,
                'dataset_id': 1
            })
        await app.db('applications').insert(
            {
                'parent_id': 4,
                'name': 'ResNet50-versao-1a2',
                'version': '98761234',
                'accuracy': 0.921,
                'n_accesses': 0,
                'model_id': 1,
                'dataset_id': 1
            })
        res.status(204).send('Banco de dados inicializado com alguns exemplos!')
    }

    return { initializeBD }
}