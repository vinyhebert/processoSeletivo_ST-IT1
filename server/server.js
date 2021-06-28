const express = require('express')
const bodyParser = require('body-parser')


const app = express()


app.use(express.json())

app.use('/', require('./route/authRouter'))
app.use('/', require('./route/productsRouter'))
/* require('./app/controllers/authController')(app) //Passando o app para o authController 
require('./app/controllers/productController')(app) */




app.listen(3003)