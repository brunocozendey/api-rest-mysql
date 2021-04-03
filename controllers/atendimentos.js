const Atendimentos = require('../models/atendimentos')

module.exports = app =>
{
    app.get('/', (req,res) => res.send('Tudo ok!'))
    app.get('/atendimentos', (req,res) => res.send('Você está na rota de atendimentos, fazendo um GET'))

    app.post('/atendimentos', (req,res) => {
        const atendimento = req.body

        Atendimentos.adiciona(atendimento)
        
        
        res.send('Você está na rota de atendimentos e realizando um POST')
    })
}