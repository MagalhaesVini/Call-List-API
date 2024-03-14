const router = require("express").Router()
const Person = require('../models/Person')


// Criar Pessoas

router.post('/', async (req, res) => {

    const { nome, documento_identificacao, empresa, setor, endereço, comercial, celular, outros } = req.body

    if (!nome) {
        res.status(422).json({ error: 'O nome é obrigatório!' })
        return
    }

    const person = {
        nome,
        documento_identificacao,
        empresa,
        setor,
        endereço,
        comercial,
        celular,
        outros,
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

// Por nome
router.get('/:nome', async (req, res) => {

    const nome = req.params.nome

    try {

        const pessoa = await Person.find({ nome: { $regex: new RegExp(nome, 'i') } });

        res.status(200).json(pessoa)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

// Por Documento
router.get('/documento/:documento_identificacao', async (req, res) => {

    const documento = req.params.documento_identificacao

    try {

        const pessoa = await Person.findOne({ documento_identificacao: documento })

        if (!pessoa) {
            res.status(422).json({ msg: 'A pessoa não foi encontrada' })
            return
        }

        res.status(200).json(pessoa)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// Por celular
router.get('/celular/:celular', async (req, res) => {

    const celular = req.params.celular

    try {

        const pessoa = await Person.find({ celular: celular })

        res.status(200).json(pessoa)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// Atualizar Pessoas
router.patch('/:id', async (req, res) => {
    const id = req.params.id;

    const {
        nome,
        documento_identificacao,
        empresa,
        setor,
        endereço,
        comercial,
        celular,
        outros,
    } = req.body;

    const updateFields = {
        nome,
        documento_identificacao,
        empresa,
        setor,
        endereço,
        comercial,
        celular,
        outros,
    };

    try {
        const updateResult = await Person.updateOne({ _id: id }, updateFields);

        if (updateResult.n === 0) {
            res.status(404).json({ msg: 'A pessoa não foi encontrada' });
            return;
        }

        res.status(200).json({ msg: 'Pessoa atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Deletar Pessoas
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const pessoa = await Person.findOne({  _id: id })

    if (!pessoa) {
        return res.status(422).json({ msg: 'A pessoa não foi encontrada' });
    }

    try {

        await Person.deleteOne({ _id: id })
        return res.status(200).json({ msg: 'Pessoa excluída com sucesso' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
});

module.exports = router
