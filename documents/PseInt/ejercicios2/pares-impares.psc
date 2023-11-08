//----- Ingresar 10 valores numericos y mostrar cuantos son pares y cuantos impares---
Algoritmo sin_titulo
	Escribir "Digite 10 numeros entre pares e impares, presione enter para capturar cada uno"
	
	Dimension num[10]
	Para i<-0 Hasta 9 Con Paso 1 Hacer
		Escribir "Digite un numero"
		Leer num[i]
	Fin Para
	
	numPar = 0
	numImpar = 0
	
	Para i<-0 Hasta 9 Con Paso 1 Hacer
//		Escribir num[i] 
		Si  num[i] % 2 == 0  Entonces
			numPar = numPar + 1
		SiNo
			numImpar = numImpar + 1
		Fin Si
	Fin Para
	
	Escribir "Haz ingresado " numPar " numeros pares"
	Escribir "Haz ingresado " numImpar " numeros impares"
	
FinAlgoritmo
