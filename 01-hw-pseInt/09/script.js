//Ingresar 10 valores numericos y mostrar cuantos son pares y cuantos impares

const numbers =  []

for (let index = 0; index < 10; index++) {
    numbers.push(prompt (`ingresa un numero`))   
}

let par = 0
let impar = 0

numbers.forEach(number => {
    if (number % 2 == 0) {
        par++
    } else {
        impar++
    }

});

console.log(par);
console.log(impar);

const  body = document.querySelector('body')
const  text = document.createElement('h2')
text.innerText = `De los numeros ingresados hay
 ${par} numeros pares
 ${impar} numeros impares`
body.append(text)
