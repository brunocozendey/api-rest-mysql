const conexao = require('../infrastructure/connection')


class Atendimentos{
    adiciona(atendimento){
        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimento,  (erro, resultado) => {
            if (erro){
                console.log(erro)
            } else {
                console.log(resultado)
            }

        })
    }
}

module.exports = new Atendimentos