const usersData = require('./../data/users.json')
const jwt = require('jsonwebtoken') 
const authConfig = require('../config/auth.json')


//Função para gerar token
function genereteToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

//Validações
exports.login = function ( email, password, res) {
    
    //## Data User
    const user = usersData.filter( user1 => {
        return user1.email == email
    })
    
    //## Validações
    if (user.length == 0)
         return res.status(400).send({ error: 'User not found' })
    
    const passJSON = user[0].password
    
    if (passJSON != password)
        return res.status(400).send({ error: 'Invalid password' })
    
    
    const id = user[0].userId
    
    
    const token = {token: genereteToken({id: id})}
    return token
}

