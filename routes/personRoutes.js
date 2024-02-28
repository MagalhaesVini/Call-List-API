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

// Atualizar Pessoa
router.patch('/id/:id', async (req, res) => {
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

    const updatedFields = {
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
        // Atualiza a pessoa pelo id
        const updatePerson = await Person.findByIdAndUpdate(id, updatedFields, { new: true });

        if (!updatePerson) {
            return res.status(404).json({ msg: 'A pessoa não foi encontrada' });
        }

        res.status(200).json(updatePerson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Deletar Pessoas
router.delete('/documento/:documento_identificacao', async (req, res) => {
    const documento = req.params.documento_identificacao

    const pessoa = await Person.findOne({ documento_identificacao: documento })

    if (!pessoa) {
        return res.status(422).json({ msg: 'A pessoa não foi encontrada' });
    }

    try {

        await Person.deleteOne({ documento_identificacao: documento })
        return res.status(200).json({ msg: 'Pessoa excluída com sucesso' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
});

module.exports = router
