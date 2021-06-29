
const levelData = require('../data/level')


//authentication rote
exports.authProduct = function (req, res, organizationName, tag) {
    const user = userRole(req)
    const organizationLevel = organizationP(organizationName)


    switch (user) {
        case 'junior':
            const levelJ = [2]
            const accessJunior = levelData.AccessControl(levelJ, organizationLevel, organizationName, res, tag)

            break;
        case 'middle':
            const levelM = [1, 2]
            const accessM = levelData.AccessControl(levelM, organizationLevel, organizationName, res, tag)

            break;
        case 'senior':
            const levelS = [0, 1, 2]
            const accessS = levelData.AccessControl(levelS, organizationLevel, organizationName, res, tag)

            break;
        case 'intern':
            const levelI = [0, 1, 2]
            const accessI = levelData.AccessControl(levelI, organizationLevel, organizationName, res, tag)

            break;
    }
}


//role: junior, senior, intern, etc
const userRole = function (req) {
    const id = req.userId
    const role = levelData.rote(id)
    return role

}

//Capture
const organizationP = function (organizationLevel) {
    const level = levelData.level(organizationLevel)
    return level
}