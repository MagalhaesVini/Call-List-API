const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    nome: String,
    documento_identificacao: Number,
    empresa: String,
    orgão_setor: String,
    endereço: String,
    comercial: Number,
    celular: Number,
    outros: Number,
})

module.exports = Person