let year = prompt('Introduce un año')

const body = document.querySelector('body')
const text = document.createElement('h2')

if (year % 4 == 0  && year % 100 != 0  ||  year % 400 == 0 ) {
    text.innerText= `El año ${year} es bisiesto`
    body.append(text)
} else {
    text.innerText=`El año ${year} no es bisiesto`
    body.append(text)
}