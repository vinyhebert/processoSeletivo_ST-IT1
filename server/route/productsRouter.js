const express = require('express')
const productRouter = require('../service/levelService')
const productsSevice = require('./../service/productsService')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

router.use(authMiddleware)

router.get('/products/:organizationName', async function (req, res) {
    
    const id = req.userId
    const organization = req.params
    const tag = req.query["tag"]
    const authProduct = productRouter.authProduct(req, organization.organizationName)
    const product = productsSevice.returnProducts(organization.organizationName,tag,res)
    console.log(product)
})





module.exports = router