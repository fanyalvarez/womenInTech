const base = prompt('Ingresa la base del triangulo')
const altura = prompt('Ingresa la altura del triangulo')

const calc = (base*altura)/2

const body = document.querySelector('body')
const text = document.createElement('h2')
text.innerText =`El area del triangulo es ${calc}` 
body.append(text)
// console.log(calc);