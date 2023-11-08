//Desarrolla un algoritmo en pseudo código que reciba un año y te responda si es o no es bisiesto.
Algoritmo sin_titulo
	year=0
	Escribir "Introduce el año"
	Leer year

	Si  year % 4 == 0  Y year % 100 <> 0  O year % 400 == 0 Entonces
		Escribir "El año ",year," es año bisiesto"
	SiNo
		Escribir "El año ",year," no es año bisiesto"
	Fin Si
FinAlgoritmo
