//Desarolla un algoritmo en pseudo c�digo que reciba la velocidad y la distancia que tiene que recorrer un carro 
//y entrega cu�nto tiempo le tomar�a recorrer esa distancia
Algoritmo sin_titulo
	velocidad = 0
	distancia = 0
	tiempo = 0
	
	Escribir "Ingresa la distancia a recorrer (km)"
	Leer distancia
	Escribir "Ingresa el dato de la velocidad (km/h)"
	Leer velocidad
	
//	distancia = velocidad * tiempo
//	velocidad = distancia / tiempo
	tiempo = (distancia / velocidad) 
	Escribir "El tiempo en recorrer la distancia es de " tiempo "Hrs"
	
FinAlgoritmo

