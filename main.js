class Estudiante {
    constructor(nombre, apellido, email, contrasena){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena;
    }
}

const arrayEstudiantes = [];

const formRegistroEstudiante = document.getElementById("formRegistroEstudiante");

formRegistroEstudiante.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const contrasena = document.getElementById("contrasena");

    console.log(`el nombre ingresado es ${nombre.value}`);
    console.log(`y el apellido ingresado es ${apellido.value}`);
    console.log(`el email ingresado es ${email.value}`);
    console.log(`la contraseña ingresada es ${contrasena.value}`);
    console.log("Formulario enviado")

    const estudiante = new Estudiante (nombre.value, apellido.value, email.value, contrasena.value);
    arrayEstudiantes.push(estudiante);
    console.log(arrayEstudiantes);

    formRegistroEstudiante.reset();
})





/****
let estudianteIngresado = prompt("Ingrese su nombre :) ")
let docenteDelEstudiante = prompt("Ingrese el nombre de su docente")

if(docenteDelEstudiante === "Sabri" || docenteDelEstudiante ==="Mai" || docenteDelEstudiante === "Sabrina" || docenteDelEstudiante ==="Maia" || docenteDelEstudiante ==="maia" || docenteDelEstudiante ==="mai" || docenteDelEstudiante ==="sabri"|| docenteDelEstudiante ==="sabrina" ){
alert("Bienvenide " + estudianteIngresado +", estudiante de " + docenteDelEstudiante)
alert("Vas a tener 3 intentos para resolver cada ejercicio. Por favor respondé todo en MAYÚSCULAS (porque de momento nuestro sistema es case sensitive)")
ejercicio("¿Cuál es el SIMPLE PAST del verbo TO BE para el sujeto SHE", "WAS")
ejercicio("¿Cuál es el PRESENT SIMPLE del verbo TO BE para el sujeto I?", "AM")
ejercicio("¿Cuál es el PARTICIPLE del verbo TO DO?", "DONE")
}
else {
alert("Lo sentimos, ingresaste une docente que el sistema no reconoce. Volvé a cargar la página para volverlo a intentar.")
}

function ejercicio(mensajeDelPrompt, respuestaCorrecta){
    for (let i=1; i <=3; i = i+1){
        let respuestaIngresada = prompt(mensajeDelPrompt)
        if(respuestaIngresada === respuestaCorrecta){
            alert("Muy bien! Tu respuesta es correcta!")
            break;
        }
        else{
            alert("Lo sentimos, esa no es la respuesta correcta. Volvé a intentarlo.")
        }
    }}
*/

