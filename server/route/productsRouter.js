const express = require('express')
const productRouter = require('../service/levelService')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

router.use(authMiddleware)

router.get('/products/:organizationName', async function (req, res) {

    const id = req.userId
    const organization = req.params
    const tag = req.query["tag"]
    const authProduct = productRouter.authProduct(req, res, organization.organizationName, tag)

})


module.exports = router