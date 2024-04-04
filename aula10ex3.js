const ask = require("readline-sync")
const racasDeCachorro = ["pisncher", "pastor alemão", "salsichinha", "liasa apso", "dalmata", "vira lata"]
const indexEscolhido = 3
const pergunta = ask.question(`qual o numero escolhido?`)
console.log("raça escolhida:" , racasDeCachorro[indexEscolhido])