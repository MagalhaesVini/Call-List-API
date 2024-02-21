require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true, }),)
app.use(express.json())
const port = process.env.PORT || 3000;

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)

app.get('/', (req, res) => {

  const message = {
    title: 'Bem-vindo à API Super Legal!',
    description: 'Esta API fornece acesso a dados incríveis sobre coisas super legais.',
    features: [
      'Funcionalidade 1',
      'Funcionalidade 2',
      'Funcionalidade 3',
    ],
    links: {
      documentation: 'https://www.exemplo.com/docs',
      support: 'https://www.exemplo.com/support',
    },
  };

  res.json(message);

});

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

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

