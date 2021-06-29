const fs = require('fs')
const path = require('path')
const readLine = require('readline') //Faz a leitura linha a linha
const express = require('express')

const app = express()

app.use(express.json())


const readable = fs.createReadStream(__dirname + '/test.txt')
const prod = []
app.get('/products/:organizationName', async function (req, res) {
console.log('começou')
/*
Trabalhando com Strems 
o q é? Uma maneira de processar um volume grande de dados aos poucos
pra que serve? Pra trabalhar com grandes arquivos

Modos

Pause
Temos que pedir os dados para o string quando quisermos

Floen
A midida que o string consele ler os dados ele envia automa
*/

//Modo Flouin
/* readable.on('data', (data)=>{
    console.log(data.toString())
    readable.pause()
    reabable.resume()
}) */

let line1 = readLine.createInterface({
    input: readable,
    output: process.stdout,
    terminal: false,
})
/* console.log(line1) */
await line1.on('line', function (line) {
    if(!line){
        console.log(line)
        let res = JSON.parse(line)
        const departament = res.department
        if (departament == 'Toys') {
            console.log(res.name)
            prod.push(res.name)
            console.log(prod)
            line = null
    }else {
            line = null
        }
        
    }
    line1.pause()
    line1.on('history', (history) => {
        console.log(`Received: ${history}`)
      });
  /*   res.send (prod) */
})
})
    

/* readable.on('readable', ()=> {
    while(chunk = readable.read()){
        const teste = chunk.toString()
        let line1 = readLine.createInterface({
            input: readable,
            output: process.stdout,
        })
        line1.on('line',function(line){
            console.log(line)
        }) */
/* const res = teste.match(/}/ig)
console.log(res) */
/*     }
}) */

app.listen(3004)