const fs = require('fs')
const path = require('path')
const readLine = require('readline')

console.log(__dirname)
const readable = fs.createReadStream('./trans_txtForJSON/test.txt')

var product = []
let cont = 0

exports.returnProducts = async function (organization, tag, res) {
    let line1 = readLine.createInterface({
        input: readable,
        output: process.stdout,
        terminal: false,
    })


    await line1.on('line', function (line) {
        let res = JSON.parse(line)
        console.log(line)
        const departament = res.department
        const tags = res.tags
        console.log(departament, tags)
        if (departament == organization) {
            if (tag) {
                console.log('tem tag')
                for (let i in tags) {
                    if (tags[i] == tag) {
                        product.push(res.name)
                        console.log('tag')
                        cont ++
                    }
                }
            } else {
                product.push(res.name)
                console.log('só parametro')
                cont ++
                /* console.log(cont) */
            }

        }
        /* return product */
    })
    res.send({
        "total": cont,
        "products": product
    })
/* cleanProducts() */
}




