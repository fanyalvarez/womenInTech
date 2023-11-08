Algoritmo sin_titulo
	palabra = ''
	Escribir "digite a continuacion la palabra o frase sin espacios"
	Leer palabra
//	long = Longitud(palabra)
	contador = 0
	comprobacion = 0
	long_final = Longitud(palabra) - 1

	Para i <- 0 Hasta Longitud(palabra) Con Paso 1 Hacer
//		Escribir 	SubCadena(palabra,long_final - contador , long_final - contador)
//		Escribir 	SubCadena(palabra,contador,contador) 
	
		Si SubCadena(palabra,contador,contador) == SubCadena(palabra,long_final - contador , long_final - contador) Entonces
			comprobacion = comprobacion + 1
//			Escribir "true   ", SubCadena(palabra,contador,contador), SubCadena(palabra,long_final - contador , long_final - contador)
		SiNo
			comprobacion = comprobacion + 0
//			Escribir "false  ", SubCadena(palabra,contador,contador), SubCadena(palabra,long_final - contador , long_final - contador)
		Fin Si

		contador = contador + 1

FinPara
	
//Escribir comprobacion, "comprobacio"
//Escribir long,  " long"
Si comprobacion == Longitud(palabra) +1 Entonces
	Escribir "la palabra si es un palíndromo"
SiNo
	Escribir "la palabra no es un palíndromo"
Fin Si


	
	
//		Escribir "longitud  ", SubCadena(palabra,0,0)
//		Escribir "ultima  ", SubCadena(palabra,long - 1 ,long - 1 )
FinAlgoritmo
