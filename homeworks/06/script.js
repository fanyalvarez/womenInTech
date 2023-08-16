let dayBorn = prompt(`Escribe tu dia de nacimiento / DD`);
let monthBorn = prompt(`Escribe tu mes de nacimiento / MM`);
let yearBorn = prompt(`Escribe tu año de nacimiento / YYYY`);

// const dayBorn = 21
// const monthBorn =6
// const yearBorn = 1990
// console.log(dayBorn, monthBorn, yearBorn);

const dateToday = new Date()
const dayToday = dateToday.getDate();
const monthToday = dateToday.getMonth() + 1;
const yearToday = dateToday.getFullYear();

let yearDif = 0
let monthDif = 0
let dayDif = 0

//-----calculo de fecha exacta -----
if (monthToday < monthBorn) {
    yearDif = yearToday - yearBorn - 1;
} else {
    yearDif = yearToday - yearBorn;
}
// console.log(yearDif);

if (monthToday > monthBorn && dayBorn > dayToday) {
    monthDif = (monthToday - monthBorn) - 1
} else if (monthToday > monthBorn && dayToday > dayBorn) {
    monthDif = (monthToday - monthBorn)
} else if (monthToday < monthBorn && dayToday > dayBorn) {
    monthDif = monthToday + 1
} else if (monthToday < monthBorn && dayToday < dayBorn) {
    monthDif = monthToday
}
// console.log(monthDif);

if (dayToday > dayBorn) {
    dayDif = 31 - dayToday
} else {
    dayDif = 31 - (dayBorn - dayToday)
}
// console.log(dayDif);

// ----calculo de fecha en dias----
yearDif = (yearDif * 12)
monthDif = (yearDif + monthDif ) * 30.4167
dayDif = Math.round(dayDif + monthDif)
// console.log(dayDif);


const body = document.querySelector('body')
const text = document.createElement('h2')
text.innerText = `Tu edad en dias es de ${dayDif} dias`
body.append(text)