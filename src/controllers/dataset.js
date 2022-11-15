module.exports = (app) => {
  const { existsOrError } = app.src.validations;

  const save = async (req, res) => {
    const dataset = { ...req.body };
    if (req.params.id) dataset.id = req.params.id;

    try {
      existsOrError(dataset.name, "Nome não informado");
      existsOrError(dataset.size, "Tamanho não informado");
      existsOrError(dataset.n_images, "Número de imagens não informado");
      existsOrError(dataset.n_classes, "Número de classes não informado");
      existsOrError(dataset.classes, "Classes não informadas");
      existsOrError(dataset.images, "Imagens não informadas");
      dataset.images = JSON.stringify(dataset.images);
    } catch (msg) {
      return res.status(400).send(msg);
    }

    if (dataset.id) {
      app
        .db("datasets")
        .update(dataset)
        .where({ id: dataset.id })
        .then(() => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    } else {
      app
        .db("datasets")
        .insert(dataset)
        .then(() => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    }
  };

  const get = (req, res) => {
    app
      .db("datasets")
      .select()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).send(err));
  };

  return { save, get };
};
