//----- Ingresar 10 valores numericos y mostrar cuantos son positivos y cuantos negativos---
Algoritmo sin_titulo
	
	Escribir "Digite 10 numeros entre positivos y negativos, presione enter para capturar cada uno"
	
	Dimension num[10]
	Para i<-0 Hasta 9 Con Paso 1 Hacer
		Escribir "Digite un numero"
		Leer num[i]
	Fin Para
	
	numPositivo = 0
	numNegativo = 0
	
	Para i<-0 Hasta 9 Con Paso 1 Hacer
		Si  num[i] > 0  Entonces
			numPositivo = numPositivo + 1
		SiNo
			numNegativo = numNegativo + 1
		Fin Si
	Fin Para
	
	Escribir "Haz ingresado " numPositivo " numeros positivos"
	Escribir "Haz ingresado " numNegativo " numeros negativos"

FinAlgoritmo
