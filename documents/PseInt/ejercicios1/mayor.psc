//------Encontrar el mayor de 3 números------
Algoritmo sin_titulo
	numero1<-0
	numero2<-0
	numero3<-0
	comp1<-0
	comp2<-0
	
	Escribir "ingresa un numero"
	Leer numero1
	Escribir "ingresa otro numero"
	Leer numero2
	Escribir "ingresa otro numero"
	Leer numero3
	
	si numero1 > numero2 Entonces
		comp1 <- numero1 
	SiNo
		comp1 <- numero2
	FinSi
	
	si comp1 > numero3  Entonces
		comp2 <- comp1 
	SiNo
		comp2 <- numero3
		
		Escribir "El numero mayor es:", comp2
	FinSi
FinAlgoritmo




