const express = require('express')
const loginService = require('../service/loginService')

const router = express.Router()

router.post('/login', async function (req ,res) { 
    const { email , password} = req.body
    console.log(email)
    const login = await loginService.login(email, password, res)

    res.send(login)
    
})






module.exports = router