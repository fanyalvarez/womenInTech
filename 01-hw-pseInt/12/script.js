let word = prompt('Ingresa una frase o una palabraodo')

let wordComp = word.replace(' ','').split('').reverse().join('')
// console.log(wordComp);

word = word.replace(' ','')
// console.log(word);


const body = document.querySelector('body')
const text = document.createElement('h2')

if (word == wordComp) {
    text.innerText='La frase o palabra si es un palindromo'
    body.append(text)
    console.log('ok');
}else{
    text.innerText='La frase o palabra no es un palindromo'
    body.append(text)
    console.log('no');
}
