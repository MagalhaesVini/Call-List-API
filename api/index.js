require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT || 3000;

const personRoutes = require('.api/personRoutes');
app.use('/person', personRoutes);

app.set('json spaces', 2);
app.get('/', (req, res) => {

  const message = {
    title: 'Bem-vindo à API Lista Telefônica!',
    description: 'Esta API permite gerenciar uma lista de contatos telefônicos.',
    
    features: [
      'Adicionar um novo contato',
      'Remover um contato',
      'Atualizar detalhes de um contato',
      'Obter lista de todos os contatos',
      'Buscar detalhes de um contato específico'
    ],
    
    links: {
      documentation: 'Em breve',
      support: 'Em breve'
    }
  };

  res.json(message);

});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@agenda.kwudaoj.mongodb.net/lista?retryWrites=true&w=majority`
)
.then(() => {
  console.log("Banco conectado com sucesso");

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
})
.catch((err) => console.log(err));
