const fs = require('fs')
const path = require('path')
const readLine = require('readline')


const readable = fs.createReadStream('./trans_txtForJSON/test.txt')

var product = []
let cont = 0

//Return Products
exports.returnProducts = async function (organizationName, tag, res) {
    readLine.clearLine(process.stdin)
    line1 = readLine.createInterface({
        input: readable,
        output: process.stdout,
        terminal: false,
    })


    await line1.on('line', function (line) {

        let res = JSON.parse(line)
        const departament = res.department
        const tags = res.tags

        if (departament == organizationName) {

            if (tag) {
                for (let i in tags) {
                    if (tags[i] == tag) {
                        product.push(res.name)
                        cont++
                    }
                }
            } else {
                product.push(res.name)
                cont++

            }
        }
    })

    res.send({
        "total": cont,
        "products": product
    })

}




