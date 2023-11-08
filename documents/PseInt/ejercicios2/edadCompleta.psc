//calculo de dias cumplidos
Algoritmo sin_titulo
	diaNac=0
	mesNac=0
	yearNac=0
	diaAct=0
	mesAct=0
	yearAct=0
	
	Escribir "Ingresa la fecha de nacimiento en formato DD/MM/AAAA (da enter para añadir cada dato)"
	leer diaNac,mesNac,yearNac
//	Escribir diaNac,mesNac,yearNac
	
	Si diaNac > 31 Entonces
		Escribir "el dia ingresado es invalido vuelve a intentar"
		Si mesNac > 12 Entonces
			Escribir "el mes ingresado es invalido vuelve a intentar"
		Fin Si
		Si yearNac > 2024  Y yearAct < 1900 Entonces
			Escribir "el año ingresado es invalido vuelve a intentar"
		Fin Si
	Fin Si
	
	Escribir "Ingresa la fecha de hoy en formato DD/MM/AAAA (da enter para añadir cada dato)"
	leer diaAct,mesAct,yearAct
//	Escribir diaAct,mesAct,yearAct
	
	Si diaAct > 31 Entonces
		Escribir "el dia ingresado es invalido vuelve a intentar"
		Si mesAct > 12 Entonces
			Escribir "el mes ingresado es invalido vuelve a intentar"
		Fin Si
		Si yearAct > 2024  Y yearAct < 1900 Entonces
			Escribir "el año ingresado es invalido vuelve a intentar"
		Fin Si
	Fin Si
	
	
	//calculo del dia
	diaOpe=diaAct-diaNac
	Si diaNac>diaAct Entonces
		diaOpe =31+(diaAct-diaNac)
	Fin Si
	
	//calculo del mes
	Si mesNac > mesAct Entonces
		mesOpe = 12 - (mesNac - mesAct)
	SiNo
		mesOpe<-(mesAct - mesNac)
	Fin Si
	
	//calculo del year
	yearOpe= (yearAct-yearNac)
	
	Si  mesNac > mesAct Entonces
		yearOpe = yearOpe - 1
	SiNo
	Fin Si
	
	Escribir "La edad es de " yearOpe " años " mesOpe " meses y " diaOpe " dias"	
	
	//calculo de diasTotales
	yearOpe = (yearOpe * 12)
	mesOpe = (yearOpe + mesOpe) * 30.4167
	diasTotales = redon(diaOpe + mesOpe)
	
	Escribir "Son " diasTotales " dias cumplidos aproximadamente"
FinAlgoritmo
