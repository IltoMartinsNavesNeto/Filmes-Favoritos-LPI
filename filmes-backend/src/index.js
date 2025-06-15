const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const filmesRoutes = require('./routes/filmes.routes');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/filmes', filmesRoutes);

// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/filmesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('🟢 MongoDB conectado!'))
.catch(err => console.error('🔴 Erro ao conectar no MongoDB:', err));

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
