//------Login------
Algoritmo sin_titulo
	nombre<-""
	password<-""
	Escribir "¿Cuál es tu nombre?"
	Leer nombre
	
	Escribir "¿Cuál es tu contraseña?" 
	Leer password
	
	Si nombre = "fernando" Y password = "1234" Entonces
		Escribir "Los datos son correctos"
	Fin Si
	
	Si nombre = "fernando" Y password <> "1234" Entonces
		Escribir "La contrasena es incorrecta"
	Fin Si
	
	Si nombre <> "fernando" Y password == "1234" Entonces
		Escribir "El nombre es incorrecto"
	Fin Si
FinAlgoritmo




