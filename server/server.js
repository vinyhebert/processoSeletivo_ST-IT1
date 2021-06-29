const express = require('express')


const app = express()


app.use(express.json())

app.use('/', require('./route/authRouter'))
app.use('/', require('./route/productsRouter'))





app.listen(3003)