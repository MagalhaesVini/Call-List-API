require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT || 3000;

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

app.set('json spaces', 2);
app.get('/', (req, res) => {

  const message = {
    title: '📞 Bem-vindo à API de Lista Telefônica!',
    description: 'Esta API permite gerenciar uma lista de contatos telefônicos de forma eficiente e fácil.',
    
    features: [
      "➕ Adicionar um novo contato à lista telefônica",
      "➖ Remover um contato da lista telefônica",
      "🔄 Atualizar os detalhes de um contato na lista telefônica",
      "📋 Obter uma lista de todos os contatos na lista telefônica",
      "🔍 Buscar detalhes de um contato específico na lista telefônica por nome ou número de telefone"
    ],
    
    documentation: {
      url: 'https://github.com/MagalhaesVini/Call-List-API/blob/main/README.md',
      description: 'Confira nossa documentação completa no README do repositório no GitHub para obter detalhes sobre como usar cada endpoint e exemplos de uso.'
    },    
    support: {
      url: 'https://github.com/MagalhaesVini/Call-List-API/issues',
      description: 'Se precisar de ajuda ou quiser relatar um problema, acesse as issues do GitHub.'
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
