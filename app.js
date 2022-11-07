
const usuario = prompt("Ingrese su nombre, porfavor");
const main_pagina = document.querySelector("header")
let bienvenida=document.createElement("p");

bienvenida.innerHTML=`<h2>Bienvenido ${usuario}</h2>`;
main_pagina.append(bienvenida)

//Seccion donde el trabajador se registra en el sistema
function Trabajador (nombre,edad,email){
    this.nombre=nombre;
    this.edad=edad;
    this.email=email;
}

let decision = prompt(" Si es nuevo en el sistema ingrese 1 \n Si ya esta registrado ingrese 2")
const lista_trabajadores=[{nombre:"facundo" ,edad:"20", email:"a@b.com"},{nombre:"matias", edad:"25",email:"mati@b.com"}]
console.log(lista_trabajadores)
if (decision == 1){
    const nuevo_nombre=prompt ("Ingrese su nombre").toLowerCase()
    const nuevo_edad= parseInt(prompt ("Ingrese su edad"))
    const nuevo_email=prompt ("Ingrese su email").toLowerCase()
    if (lista_trabajadores.some((el)=>el.email==nuevo_email)){
      alert("la cuenta ya existe")
    }
    const Nuevo_trabajador = new Trabajador (nuevo_nombre,nuevo_edad,nuevo_email)
    lista_trabajadores.push(Nuevo_trabajador)
    
} else if (decision == 2) {
  alert("Esperemos que este teniendo un buen ambito laboral")
  const ingreso_nombre = prompt("Ingrese su nombre").toLowerCase()
  const ingreso_email = prompt("Ingrese su email").toLowerCase()
  if (lista_trabajadores.some((el)=>el.email==ingreso_email) && lista_trabajadores.some((el)=>el.nombre==ingreso_nombre)){
    alert("Bienvenido " + ingreso_nombre + " al sistema")
  } else {
    alert("Usuario inexistente, por favor registrese")
  }
  
} else {
  alert ("Opcion invalida, reinicie la pagina")
}

// Carga o modificacion de Cursos
const Array_cursos=[{nombre:"carpinteria",precio:"200", texto:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem asperiores maxime dignissimos amet ex a doloribus corrupti maiores culpa fugit enim officiis facere, dolores mollitia odio beatae obcaecati quos? Tempore dolores, voluptatum suscipit voluptate molestiae quae id neque quia ullam? "},
{nombre:"azafata",precio:"250", texto:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem asperiores maxime dignissimos amet ex a doloribus corrupti maiores culpa fugit enim officiis facere, dolores mollitia odio beatae obcaecati quos? Tempore dolores, voluptatum suscipit voluptate molestiae quae id neque quia ullam? "},
{nombre:"cocina",precio:"100", texto:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem asperiores maxime dignissimos amet ex a doloribus corrupti maiores culpa fugit enim officiis facere, dolores mollitia odio beatae obcaecati quos? Tempore dolores, voluptatum suscipit voluptate molestiae quae id neque quia ullam? "},
{nombre:"electricista",precio:"140", texto:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem asperiores maxime dignissimos amet ex a doloribus corrupti maiores culpa fugit enim officiis facere, dolores mollitia odio beatae obcaecati quos? Tempore dolores, voluptatum suscipit voluptate molestiae quae id neque quia ullam?"}]
class Cursos {
  constructor (nombre,precio,texto){
    this.nombre=nombre;
    this.precio=precio + "USD";
    this.texto=texto;
  }
}


let decision_cursos = prompt (" Seleccione 1 para agregar un curso\n Seleccione 2 para actualizar los cursos")

if ( decision_cursos == 1){
  const curso_nombre = prompt("Ingrese el nombre del curso").toLowerCase()
  const curso_precio = prompt("Ingrese el precio del curso")
  const curso_texto = prompt("Ingrese el texto del curso").toLowerCase()
  const nuevo_curso = new Cursos (curso_nombre,curso_precio,curso_texto)
  Array_cursos.push(nuevo_curso)
} else if (decision_cursos == 2){
  let eleccion_curso = prompt("Ingrese el nombre del curso").toLowerCase()
  let cambio_curso = prompt("1- Cambio de nombre\n 2-Cambio de precio\n 3-Cambio de texto")
  
  const busqueda = function(el_busqueda,el_viejo,el_nuevo){
    Array_cursos.forEach((element)=>{if(element[el_busqueda]==el_viejo){element[el_busqueda]=el_nuevo}})
  }

  if (cambio_curso==1){
    let nombre_nuevo = prompt("Ingrese el nuevo nombre").toLowerCase()
    busqueda("nombre",eleccion_curso,nombre_nuevo)
  } else if(cambio_curso==2){
    let precio_nuevo = prompt("Ingrese el nuevo precio")
    busqueda("precio",eleccion_curso,precio_nuevo)
  } else if (cambio_curso==3){
    let texto_nuevo = prompt("Ingrese el nuevo texto").toLowerCase()
    busqueda("texto",eleccion_curso,texto_nuevo)
  }
}

//Imprimir el recibo
let j= parseInt(prompt("Cuantos cursos compro el cliente?"))
for (let i=0;0<=j;i++){
  let nombre = prompt("Ingrese el nombre del curso")
}
let compra_curso=prompt("Nombre")
const compra = function(nombre,el_bus){
  Array_cursos.forEach((element)=>{element[nombre] })
}

Array_cursos[recibo]





























