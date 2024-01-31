require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended: true,}),)
app.use(express.json())
const port = process.env.PORT || 3000;

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)

app.get('/', (req, res) => {

    res.json({ msg: ' Olá ' })

})

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@agenda.kwudaoj.mongodb.net/test?retryWrites=true&w=majority`
)
    .then(() => {
        console.log("Banco conectado com sucesso");
        app.listen(3000);
    })
    .catch((err) => console.log(err));

