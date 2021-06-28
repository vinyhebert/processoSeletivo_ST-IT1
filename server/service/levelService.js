const { access } = require('fs')
const levelData = require('../data/level')


//Permissão
exports.authProduct = function (req, organization1) {
    const user = userRole(req)
    const organization = organizationP(organization1)

    console.log(user, organization)

    switch (user) {
        case 'junior':
            const levelJ = [2]
            const accessJunior = levelData.AccessControl(levelJ, organization)
            
            break;
        case 'middle':
            const levelM = [1, 2]
            const accessM = levelData.AccessControl(levelM, organization)

            break;
        case 'senior':
            const levelS = [0, 1, 2]
            const accessS = levelData.AccessControl(levelS, organization)

            break;
        case 'intern':
            const levelI = [0, 1, 2]
            const accessI = levelData.AccessControl(levelI, organization)

            break;
    }
}


//Captura role: junior, senior, intern, etc
const userRole = function (req) {
    const id = req.userId

    console.log(id)

    const role = levelData.rote(id)
    return role

}

//Captura 
const organizationP = function (organization) {

    const level = levelData.level(organization)
    return level
}

