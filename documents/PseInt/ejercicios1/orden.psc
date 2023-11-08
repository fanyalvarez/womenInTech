//------Ordenar 5 números de mayor a menor------
Algoritmo sin_titulo
	orden1 <- 0
	orden2 <- 0
	orden3 <- 0
	orden4 <- 0
	orden5 <- 0
	
	Escribir "Ingrese un numero";
	Leer number1;
	Escribir "Ingrese un numero";
	Leer number2;
	si number1 > number2 Entonces
		orden1 <- number1
		orden2 <- number2
	sino
		orden2 <- number1
		orden1 <- number2	
	FinSi
	
	Escribir "Ingrese un numero";
	Leer number3;
	si number3 > orden1 
		orden3 <- orden2
		orden2 <- orden1
		orden1 <- number3
	SiNo
		si number3 > orden2 
			orden3 <- orden2
			orden2 <- number3
		sino 
			orden3 <- number3
		FinSi	
	FinSi
	Escribir "Ingrese un numero";
	Leer number4;
	si number4 > orden1 entonces
		orden4 <- orden3
		orden3 <- orden2
		orden2 <- orden1
		orden1 <- number4
	SiNo
		si number4 > orden2 entonces
			orden4 <- orden3
			orden3 <- orden2
			orden2 <- number4
		SiNo
			si number4 > orden2 entonces
				orden4 <- orden3
				orden3 <- orden2
				orden2 <- number4
			SiNo
				si number4 > orden3 entonces
					orden4 <- orden3
					orden3 <- number4
				sino
					orden4 <- number4
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir "Ingrese un numero";
	Leer number5;
	si number5 > orden1 entonces
		orden5 <- orden4
		orden4 <- orden3
		orden3 <- orden2
		orden2 <- orden1
		orden1 <- number5
	SiNo
		si number5 > orden2 entonces
			orden5 <- orden4
			orden4 <- orden3
			orden3 <- orden2
			orden2 <-  number5
		SiNo
			si number5 > orden3 entonces
				orden5 <- orden4
				orden4 <- orden3
				orden3 <- number5
			SiNo
				si number5 > orden4 entonces
					orden5 <- orden4
					orden4 <- number5
				sino
					orden5 <- number5
				FinSi
			FinSi
		FinSi 
	FinSi
	Escribir "el orden es:" orden1 " - " orden2 " - " orden3 " - " orden4 " - " orden5 
FinAlgoritmo




