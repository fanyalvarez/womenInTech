Algoritmo sin_titulo
	diaNac<-21
	mesNac<-11
	yearNac<-1990
	diaAct<-24
	mesAct<-7
	yearAct<-2023
	
	diaOpe<-diaAct-diaNac
	Si diaNac>diaAct Entonces
		diaOpe <-31+(diaAct-diaNac)
	Fin Si
	
	Escribir mesNac,mesAct

	Si mesNac > diaAct Entonces
		mesOpe <-    12 - (mesNac - mesAct)
	SiNo
		mesOpe<-12-(mesAct - mesNac)
	Fin Si
	Escribir mesOpe
	
	
	
	yearOpe<- (yearAct-yearNac)
	


	

	
	Escribir "la edad es de " yearOpe " años " mesOpe " meses y " diaOpe " dias"
	
	
FinAlgoritmo
