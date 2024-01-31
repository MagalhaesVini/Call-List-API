const router = require("express").Router()
const Person = require('../models/Person')


// Criar Pessoas

router.post('/', async (req, res) => {

    const { nome, documento_identificacao, tipo_pessoa, telefone } = req.body

    if (!nome) {
        res.status(422).json({ error: 'O nome é obrigatório!' })
        return
    }

    const person = {
        nome,
        documento_identificacao,
        tipo_pessoa,
        telefone,
    }

    try {
        await Person.create(person)
        res.status(201).json({ msg: 'Pessoa inserida no sistema com sucesso!' })

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

// Visualizar Pessoas

//Todas
router.get('/', async (req, res) => {
    try {

        const pessoa = await Person.find()

        res.status(200).json(pessoa)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Por nome
router.get('/:nome', async (req, res) => {

    const nome = req.params.nome

    try {

        const pessoa = await Person.find({ nome: nome })

        res.status(200).json(pessoa)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

//Por Documento
router.get('/documento/:documento_identificacao', async (req, res) => {

    const documento = req.params.documento_identificacao

    try {

        const pessoa = await Person.findOne({ documento_identificacao : documento })

        if(!pessoa) {
            res.status(422).json({ msg: 'A pessoa não foi encontrada' })
            return
        }

        res.status(200).json(pessoa)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// Por telefone
router.get('/telefone/:telefone', async (req, res) => {

    const telefone = req.params.telefone

    try {

        const pessoa = await Person.find({ telefone : telefone })

        res.status(200).json(pessoa)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router