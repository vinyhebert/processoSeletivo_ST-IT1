const users = require('./users.json')
const organizationJSON = require('./organization.json')
const { Console } = require('console')




exports.rote = function (id) {
    const user = users.filter(user1 => {
        return user1.userId == id
    })
    const role = user[0].roles[0]

    return role
}

exports.level = function (organization) {
    const levelJSON = organizationJSON.filter( param => {
        return param.name == organization
    })

    const level = levelJSON[0].level
    return level
}

//Controle de Acesso
exports.AccessControl = function (level, organization ) {
    
    const arrayFilter = level.map(param => {
        if ( param == organization){
            const access =+ 1
            return access
        }
    })
    const filter = arrayFilter[1]
    if ( filter >= 1) {
        //função de busca
        return console.log('Você tem acesso')
    } else {
         return console.log('Você não tem acesso')
    }
}
