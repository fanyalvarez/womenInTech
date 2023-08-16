const numbers =  []

for (let index = 0; index < 5; index++) {
    numbers.push(prompt (`ingresa un numero`))   
}
// console.log(numbers);
const body = document.querySelector('body')

const text = document.createElement('h2')
text.innerText = `El orden de los numeros es:`
body.append(text)

const ul = document.createElement('ul')

body.append(ul)

numbers.sort((a,b) => a-b)
numbers.forEach(number => {
    const li = document.createElement('li')
    li.innerText=number
    ul.append(li)
});
