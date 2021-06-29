const users = require('./users.json')
const organizationJSON = require('./organization.json')
const productsSevice = require('./../service/productsService')


//Return rote
exports.rote = function (id) {
    const user = users.filter(user1 => {
        return user1.userId == id
    })
    const role = user[0].roles[0]
    return role
}
//Return Level
exports.level = function (organizationLevel) {
    const levelJSON = organizationJSON.filter(param => {
        return param.name == organizationLevel
    })

    const level = levelJSON[0].level
    return level
}

//AccessControl
exports.AccessControl = function (level, organizationLevel, organizantionName, res, tag) {

    const arrayFilter = level.map(param => {
        if (param == organizationLevel) {
            const access = + 1
            return access
        }
    })

    const filter = arrayFilter[1]

    if (filter >= 1) {
        //if authorized
        const product = productsSevice.returnProducts(organizantionName, tag, res)

    } else {
        return res.send({ 'Alert': 'Acesso não pode ser autorizado' })
    }
}
