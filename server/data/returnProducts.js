const fs = require('fs')
const path = require('path')
const readLine = require('readline') 

const readable = fs.createReadStream('./../trans_txtForJSON/test.txt')


exports.returnProducts = function(organization,tag, res) {
    
    let line1 = readLine.createInterface({
        input: readable,
        output: process.stdout,
        terminal: false,
    })

    product = []
    line1.on('line', function (line) {
        /* console.log(line) */
        let res = JSON.parse(line)
        const departament = res.department
        const tags = res.tags
        if (departament == organization) {
            if(tags) {
                for (let i in tags) {
                    if (tags[i] == tag){
                        return product.push(res.name)
                    }
                }
            }else {
                product.push(res.name)
            }
            
        }
        return product
    }) 
    res.send(product)
/* console.log(product) */
}




