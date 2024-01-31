const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    nome: String,
    documento_identificacao: Number,
    tipo_pessoa: String,
    telefone: Number,
})

module.exports = Person