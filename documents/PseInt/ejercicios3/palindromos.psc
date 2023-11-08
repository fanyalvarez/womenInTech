//Desarrolla un algoritmo en pseudo código que valide si una palabra o frase es palindromo.
Algoritmo sin_titulo
	palabra = ''
	Escribir "digite a continuacion la palabra o frase sin espacios"
	Leer palabra
	contador = 0
	comprobacion = 0
	long_final = Longitud(palabra) - 1
	
	Para i <- 0 Hasta Longitud(palabra) Con Paso 1 Hacer
		Si SubCadena(palabra,contador,contador) == SubCadena(palabra,long_final - contador , long_final - contador) Entonces
			comprobacion = comprobacion + 1
		SiNo
			comprobacion = comprobacion + 0
			
		Fin Si
		contador = contador + 1
	FinPara
	
	Si comprobacion == Longitud(palabra) +1 Entonces
		Escribir "la palabra si es un palíndromo"
	SiNo
		Escribir "la palabra no es un palíndromo"
	Fin Si
	
FinAlgoritmo
