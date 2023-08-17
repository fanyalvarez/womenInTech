const numbers =  []

for (let index = 0; index < 10; index++) {
    numbers.push(prompt (`ingresa un numero ya sea positivo o negativo`))   
}

let positivo = 0
let negativo = 0

numbers.forEach(number => {
    if (number > 0 ) {
        positivo++
    } else {
        negativo++
    }

});

console.log(positivo);
console.log(negativo);

const  body = document.querySelector('body')
const  text = document.createElement('h2')
text.innerText = `De los numeros ingresados hay
 ${positivo} numeros positivos
 ${negativo} numeros negativos`
body.append(text)
