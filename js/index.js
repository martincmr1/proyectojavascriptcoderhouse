
//===============================ONLINE BANKING=============================================================
              

//==============================INICIAR SESION==============================================================
function inicioSesion() {
  let NOMBRE = prompt ("Ingresa tu nombre")
  while (NOMBRE === "") {
    NOMBRE = prompt("Ingresa tu nombre:")
  }
  let APELLIDO=prompt ("Ingresa tu apellido")
  while (APELLIDO === "") {
   APELLIDO = prompt("Ingresa tu apellido:")
  }
  let DNI=parseInt(prompt ("Ingresa tu DNI"))    
  while (DNI === "") {
   DNI= parseInt(prompt ("Ingresa tu DNI"))
  }
  alert("Bienvenido/a " +NOMBRE)
}
                        

//============================SOLICITUD DE PRODUCTOS==========================================================
let DIRECCION=""
function solicitudProductos() {
  NOMBRE = prompt ("Ingresa tu nombre")
  while (NOMBRE === "") {
    NOMBRE = prompt("Ingresa tu nombre:")
  }
    APELLIDO=prompt ("Ingresa tu apellido")
  while (APELLIDO === "") {
    APELLIDO = prompt("Ingresa tu apellido:")
  }
    DNI=parseInt(prompt ("Ingresa tu DNI"))    
  while (DNI === "") {
    DNI= parseInt(prompt ("Ingresa tu DNI"))
  }
    DIRECCION =prompt ("Ingresa tu dirección")    
  while (DIRECCION === "") {
      DIRECCION= prompt ("Ingresa tu direccion")
  }
    alert("Formulario de solicitud de productos (aceptar para enviar) \n Nombre: "+NOMBRE +"\n Apellido: " +APELLIDO +"\n DNI: "+DNI +"\n Dirección: " +DIRECCION)
    alert ("Su solicitud fue enviada")
}
 
//================================MENU BIENVENIDA==============================================================
function menuPrincipal() {                
  alert("Bienvenido/a a Online Banking de Santander Río")
    let cliente = parseInt(prompt(" 1.Ya soy cliente \n 2.No soy cliente")) 
  switch (cliente){
    case 1:
      inicioSesion()
      menuClientes()
      break
    case 2:   
      alert ("Quiero abrir mi cuenta") 
      solicitudProductos()
      menuPrincipal()
      break
      default : 
      menuPrincipal()
      break
      }  
}  
//==========================================TARJETAS===============================================================================

function tusTarjetas() {
 class TarjetaCredito {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
}
let tarjetasDecredito = [
  new TarjetaCredito("VISA", 120000),
  new TarjetaCredito("MASTERCARD", 130000),
  new TarjetaCredito("AMERICAN EXPRESS", 140000)]


function mostrarTarjetas() {
  for (let index = 0; index < tarjetasDecredito.length; index++) {
    alert(`El saldo de tu tarjeta ${tarjetasDecredito[index].nombre} es $${tarjetasDecredito[index].saldo}`)
  }
}
let nombre = prompt("Ingrese el nombre de la nueva tarjeta").toUpperCase()
let saldo =parseFloat(prompt("Ingrese el saldo de la nueva tarjeta $"))
let nuevaTarjeta = new TarjetaCredito(nombre, saldo)
tarjetasDecredito.push(nuevaTarjeta)
mostrarTarjetas()
}

//===============================================CUENTAS ============================================================================

function mostrarCuentas () {
  let cuentas = ["Caja de ahorro","Cuenta Corriente"]
  saldoCuentas= ["120000","130000","140000"]
  for (let index = 0; index < cuentas.length; index++){
   alert ("el saldo de tu "+ cuentas[index] +" es $ "+saldoCuentas[index])
  }
}
    
//=================================MENU CLIENTES====================================================================
function menuClientes() {
  let seleccion = parseInt(prompt("Elige la opción \n 1.Cuentas \n 2.Tarjetas \n 3.Simular un préstamo ")) 
    switch (seleccion){
      case 1:
        mostrarCuentas()
        menuClientes()
         break
      case 2:   
        tusTarjetas ()
        menuClientes ()
        break
      case 3:
        simularPrestamo()
        break
        default : 
        menuPrincipal()
        break
    }  
}     

// =============================SIMULADOR DE PRESTAMOS=======================================================
function simularPrestamo() {
  const TASAINTERES= 0.73
  let listaResultados = ""
  let medioPago=0
  alert("Bienvenido/a al simulador de préstamos del Banco Santander Río")
  alert("Nuestra tasa de Interés es del 73%")
  let EDAD = parseInt(prompt("Ingresa tu edad"))  
  while (EDAD =="" ) { 
    alert ("no ingresaste tu edad")
    EDAD =parseInt(prompt("Ingresa tu edad:"))
  } 
  while (EDAD < 18 ) { 
    alert ("debes ser mayor de edad para realizar esta consulta")
    EDAD =parseInt(prompt("Ingresa tu edad:"))
  }
  let moneda = parseInt(prompt("Elija la moneda: \n 1.Pesos \n 2.Dolares")) 
    switch (moneda){
      case 1:
        medioPago ="$ "
        alert("ud eligió Pesos")
        break
      case 2:
        medioPago ="u$S "
        alert ("ud eligió Dólares") 
        break
      default :
        medioPago = prompt ("Elija la moneda: \n 1.Pesos \n 2.Dolares")
        break
    }    
  let montoSolicitado = parseInt(prompt("Ingresa el monto a Solicitar  (recueda que el monto minimo son " +medioPago +"10000)"))
  while (montoSolicitado < 10000 ) {
    alert ("el monto minimo es " +medioPago +" 10000")
    montoSolicitado =parseInt(prompt("Ingresa el monto a Solicitar  (recueda que el monto minimo son " +medioPago +" 10000)"))
  }
    alert ("solicitaste " +medioPago +montoSolicitado)
    let CUOTAS=parseInt(prompt("ingrese la cantidad de cuotas (MINIMO 12 y MAXIMO 24)")) 
  while (CUOTAS <12 || CUOTAS >24) {
    alert ("el numero de cuotas no está dentro del rango permitido de 12 mínimo y máximo 24")  
    CUOTAS=parseInt(prompt("ingrese la cantidad de cuotas (MINIMO 12 y MAXIMO 24)"))
  }
    let cuotaMensual =montoSolicitado * (1 + TASAINTERES)/CUOTAS
    alert ("tu cuota mensual será " +medioPago + cuotaMensual)
    let montoAdeudado = montoSolicitado * (1 + TASAINTERES)
    alert ("el monto adeudado es "+medioPago + montoAdeudado)
    for (let DEUDA = 0; DEUDA < CUOTAS; DEUDA++) {
    montoAdeudado = montoAdeudado - cuotaMensual
    listaResultados += "- El saldo después de la cuota " + (DEUDA + 1) + " es " + medioPago + montoAdeudado + "\n"
  }
  alert (listaResultados)
  alert ("presione aceptar para salir")
  menuPrincipal()
}

menuPrincipal()

