const returnProducts = require('./../data/returnProducts')


exports.returnProducts = function (organization,tag, res, productArray) {
    return returnProducts.returnProducts(organization,tag, res, productArray)
}  



