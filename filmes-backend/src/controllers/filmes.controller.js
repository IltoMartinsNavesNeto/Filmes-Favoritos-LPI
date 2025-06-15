const Filme = require('../models/filme.model');

exports.getAll = async (req, res) => {
  const filmes = await Filme.find();
  res.json(filmes);
};

exports.create = async (req, res) => {
  const novoFilme = new Filme(req.body);
  await novoFilme.save();
  res.status(201).json(novoFilme);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const filmeAtualizado = await Filme.findByIdAndUpdate(id, req.body, { new: true });
  res.json(filmeAtualizado);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  await Filme.findByIdAndDelete(id);
  res.status(204).end();
};
