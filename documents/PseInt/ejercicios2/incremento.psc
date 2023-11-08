//----- Calcular el incremento salarial de una persona: 
//Si su salario es menor a 15mil el incremento será del 20% y 
//si es mayor a 15mil el incremento será del 15%--

Algoritmo sin_titulo
	
	salario = 0
	Escribir "Ingrese el salario percibido"
	Leer salario
	Escribir salario " salario"
	
Si salario > 15000 Entonces
	salario = salario + (salario * .15)
	Escribir "A tu salario se le aplicara el incremento y quedaria en " salario
SiNo
	Escribir "A tu salario no se le aplicara el incremento y quedaria igual en " salario
Fin Si

FinAlgoritmo
