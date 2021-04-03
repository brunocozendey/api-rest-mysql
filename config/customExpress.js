const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


//Configura o app com os controllers externo
module.exports = () => {
    //Cria o app usando express servidor e rotas
    const app = express()

    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}
