let number1 = prompt('ingresa un numero')
let factorial = 1

while (number1 !== 0) {

    factorial = factorial * number1
    number1 = number1 - 1
}

// console.log(factorial);
// console.log(number1);

const body = document.querySelector('body')
const textH2 = document.createElement('h2')
textH2.innerText = `El factorial del numero es ${factorial}`
body.append(textH2)