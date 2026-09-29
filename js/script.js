

let temperatura = 30
let resultado = ""

if(temperatura <0) {
    resultado = "Alaska"
} else if (temperatura <10){
    resultado = "Rio Grande do Sul"
} else if (temperatura <20){
    resultado = "Londrina"
} else if (temperatura <30){
    resultado = "Minas Gerais"
} else if (temperatura <40){
    resultado = "Bahia"
}

console.log(`A temperatura é ${temperatura} e o resultado é ${resultado}`)

console.log("A temperatura é " + temperatura + " e o resultado é " + resultado)

let pontos = 5253
let anosDeCliente = 3
let classe = ""

if(pontos <100) {
    console.log("Você é cliente Bronze, agradecemos a confiança")
} else if(pontos <500) {
    console.log("Você é cliente Prata, agradecemos a confiança")
} else if(pontos <1000) {
    console.log("Você é cliente Ouro, agradecemos a confiança")
} else if(pontos >=1000 && anosDeCliente >1) {
    console.log("Você é cliente Diamante, agradecemos a confiança")
} else 
    console.log("Você é cliente Platina, agradecemos a confiança")
