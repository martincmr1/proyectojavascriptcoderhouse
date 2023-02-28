const TASAINTERES= 0.73
let montoSolicitado=0
let EDAD =0
let CUOTAS=0
let cuotaMensual=0
let INTERES =0
alert("Bienvenido/a al simulador de préstamos del Banco Santander Río")
alert("Nuestra tasa de Interés es del 73%")
let NOMBRE = prompt ("Ingresa su nombre")
while (NOMBRE === "") {
  NOMBRE = prompt("Ingresa tu nombre:");
}
let APELLIDO=prompt ("Ingresa tu apellido")
while (APELLIDO === "") {
  APELLIDO = prompt("Ingresa tu apellido:")
}
EDAD = prompt("Ingresa tu edad")
while (EDAD =="" ) { 
  alert ("no ingresaste tu edad")
  EDAD = prompt("Ingresa tu edad:");
} 
while (EDAD < 18 ) { 
  alert ("debes ser mayor de edad para realizar esta consulta")
  EDAD = prompt("Ingresa tu edad:");
}  
montoSolicitado = parseInt (prompt ("Ingresa el monto a Solicitar  (recueda que el monto minimo son $10000)"))
while (montoSolicitado < 10000 ) {
                    alert ("el monto minimo es 10000")
                    montoSolicitado =prompt ("Ingresa el monto a Solicitar  (recueda que el monto minimo son $10000)")
}
alert ("solicitaste $"+montoSolicitado);
CUOTAS=prompt ("ingrese la cantidad de cuotas (MINIMO 30 y MAXIMO 75)")
while (CUOTAS <30 || CUOTAS >75) {
alert ("el numero de cuotas no está dentro del rango permitido de 30 mínimo y máximo 75")  
CUOTAS=prompt ("ingrese la cantidad de cuotas (MINIMO 30 y MAXIMO 75")  
}
cuotaMensual =montoSolicitado * (1 + TASAINTERES)/CUOTAS
 alert (NOMBRE +" "+ APELLIDO + " " + "tu cuota mensual será $ " + cuotaMensual)
let montoAdeudado = montoSolicitado * (1 + TASAINTERES)
alert ("el monto adeudado es $" + montoAdeudado)
for (let DEUDA = 0; DEUDA < CUOTAS; DEUDA++) {
  montoAdeudado = montoAdeudado - cuotaMensual
  alert("El saldo después de cada cuota " + (DEUDA + 1) + " es $ " + montoAdeudado)
}




















  

















  
  

   
  
  
    




