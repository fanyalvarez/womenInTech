const radio = prompt('Ingresa el radio de la esfera')
const calc = (4 / 3) * Math.PI * radio

console.log(calc);

const body = document.querySelector('body')
const text = document.createElement('h2')
text.innerText = `El volumen de la esfera10
 es de ${calc}^3`
body.append(text)