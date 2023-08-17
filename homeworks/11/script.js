let salary = prompt('Ingresa tu salario actual')

const body = document.querySelector('body')
const text = document.createElement('h2')

if (salary  < 15000) {
    salary = Math.round( salary * 1.20)
    text.innerText = `Tu nuevo salario quedara en $${salary}.00`
    body.append(text)
    console.log(salary);
} else {
    salary = Math.round( salary * 1.15)
    text.innerText = `Tu nuevo salario quedara en $${salary}.00`
    body.append(text)
    console.log(salary);
}