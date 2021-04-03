const customExpress = require('./config/customExpress')
const conexao = require('./infrastructure/connection')
const tabelas = require('./infrastructure/tables')

conexao.connect((erro) => {
    if (erro){
        console.log(erro)
    }
    else{
        console.log('BD Conectado com sucesso')
        
        tabelas.init(conexao)
        const app = customExpress() 

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }

})



