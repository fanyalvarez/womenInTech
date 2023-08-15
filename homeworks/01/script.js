let number1 = prompt("Ingresa un numero")
let number2 = prompt("Ingresa un numero")
let number3 = prompt("Ingresa un numero")

let comp1 = ''

if (number1 > number2) {
    comp1 = number1
} else{
    comp1 = number2
};

if (comp1 > number3) {
    comp1
    console.log(comp1);
}else {
    comp1= number3
};

const body = document.querySelector('body')
// console.log(body)
const textH2 = document.createElement('h2')
textH2.innerText = `El numero mayor es ${comp1}`
body.append(textH2)