const returnProducts = require('./../data/returnProducts')


exports.returnProducts = function (organization,tag, res) {
    return returnProducts.returnProducts(organization,tag, res)
}  