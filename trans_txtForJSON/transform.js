const fs = require('fs')
const path = require('path')
const readLine = require('readline') //Faz a leitura linha a linha



const readable = fs.createReadStream(__dirname + '/test.txt')



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
    terminal: false
})
line1.on('line', function (line) {
    /* console.log(line) */
    let res = JSON.parse(line)
    const departament = res.department
    if (departament == 'Toys') {
        console.log(res.name)
    }
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