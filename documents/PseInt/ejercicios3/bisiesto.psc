//Desarrolla un algoritmo en pseudo c�digo que reciba un a�o y te responda si es o no es bisiesto.
Algoritmo sin_titulo
	year=0
	Escribir "Introduce el a�o"
	Leer year

	Si  year % 4 == 0  Y year % 100 <> 0  O year % 400 == 0 Entonces
		Escribir "El a�o ",year," es a�o bisiesto"
	SiNo
		Escribir "El a�o ",year," no es a�o bisiesto"
	Fin Si
FinAlgoritmo
