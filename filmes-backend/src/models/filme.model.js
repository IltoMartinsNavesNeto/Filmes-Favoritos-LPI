const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  ano: { type: String, required: true },
  imagem: { type: String }
});

module.exports = mongoose.model('Filme', FilmeSchema);
