//Creo constantes para asosciarlas con los botones  y cajas. 
const agregarEjercicio = document.getElementById("agregarEjercicio");
const eliminarEjercicio = document.getElementById("eliminarEjercicio");
const editarEjercicio = document.getElementById("editarEjercicio");
const cajaEjercicios = document.getElementById("cajaEjercicios");
const cajaFormEjercicios = document.getElementById("cajaFormEjercicios");

//Creo una clase con un constructor para los ejercicios
class Ejercicios {
    constructor(idEjercicio, task, respuestaCorrecta) {
        this.idEjercicio = idEjercicio;
        this.task = task; 
        this.respuestaCorrecta = respuestaCorrecta;
    }
}

//Creo 3 ejercicios default 
// Creo 3 ejercicios por defecto
const ejercicioUno = new Ejercicios(
    "ejercicioUno",
    "¿Cuál es el SIMPLE PAST del verbo TO BE para el sujeto SHE?",
    "WAS"
);
const ejercicioDos = new Ejercicios(
    "ejercicioDos",
    "¿Cuál es el PARTICIPLE del verbo TO DO?",
    "DONE"
);
const ejercicioTres = new Ejercicios(
    "ejercicioTres",
    "¿Cuál es el SIMPLE PRESENT del verbo TO BE para el sujeto I?",
    "AM"
);

//Creo el array ejercicios, con los ejercicios default
const arrayEjercicios = [ejercicioUno, ejercicioDos, ejercicioTres];

// Genero el usuario Admin con un user y password
const usuarioAdmin = "Admin4";
const passwordAdmin = "admin";

let enviarFormAgregarEjercicioGlobal = null ;
agregarEjercicio.addEventListener("click", () => {
    Swal.fire({
        //1. Pedido de ingreso de datos del admin.
        title: "Ingresa tu usuario de admin",
        html: `
            <input type="text" id="usuarioIngresadoAdmin" class="swal2-input" placeholder="ingresa tu usuario">
            <input type="text" id="passwordIngresadaAdmin" class="swal2-input" placeholder="ingresa tu contraseña">`,
        confirmButtonText: "Enviar",
        showCancelButton: true, 
        cancelButtonText: "Cancelar",}).then(
            (result)=>{
                if(result.isConfirmed){ 
                    // Si el usuario le dio Enviar (confirm), genero variables para almacenar la información ingresada
                    let usuarioIngresadoAdmin = document.getElementById("usuarioIngresadoAdmin").value;
                    let passwordIngresadaAdmin = document.getElementById("passwordIngresadaAdmin").value;
                    
                    // Si el usuario y contraseña ingresados son los datos del admin, 
                    if (usuarioIngresadoAdmin === usuarioAdmin && passwordIngresadaAdmin === passwordAdmin){
                        
                        // Genero de manera dinámica el form para crear un nuevo ejercicios
                        cajaFormEjercicios.innerHTML=`
                        <section class="form">
                            <div class="form__section"><input type="text" id="idEjercicio" class="swal2-input" placeholder="ingresa el ID del Ejercicio"></div>
                            <div class="form__section"><input type="text" id="task" class="swal2-input" placeholder="ingresa el task del ejercicios"></div>
                            <div class="form__section"><input type="text" id="respuestaCorrecta" class="swal2-input" placeholder="ingresa la respuesta del ejercicio"></div>
                            <div class="buttonsection">
                                <div class="buttonsection" id="enviarFormAgregarEjercicio"><input type="submit" value="Enviar" class="form__button" id="submit"></div>
                                <div class="buttonsection" id="cerrarForm"><input type="submit" value="Cerrar" class="form__button" id="submit"></div> </div> </section> `;
                        
                        // Genero una constante para linkear con el botón que se acaba de generar (el de submit) y la linkeo con una variable global
                        let enviarFormAgregarEjercicio = document.getElementById("enviarFormAgregarEjercicio");
                        enviarFormAgregarEjercicioGlobal = enviarFormAgregarEjercicio;
                        EventListenerBotonAgregarEjercicio();

                        };
                        //asocio el botón cerrar form con un comportamiento que cierra el form
                        const cerrarForm = document.getElementById("cerrarForm");
                        cerrarForm.addEventListener("click", () => {
                            cajaFormEjercicios.innerHTML= ``;
                        });
                        // Si los datos del admin no son correctos, disparo un mensaje de error con Swal Alert 
                            }else {
                                Swal.fire({
                                    title: "Error en los datos de admin",
                                    icon: "error",
                                    confirmButtonText: "ok",
                                })
                            }}
            )})


//Asocio el botón con el comportamiento que genera un nuevo ejercicio y lo pushea a mi array Ejercicios
function EventListenerBotonAgregarEjercicio(){
enviarFormAgregarEjercicioGlobal.addEventListener("click", () => {
    let idEjercicio = document.getElementById("idEjercicio").value;
    let task = document.getElementById("task").value;
    let respuestaCorrecta = document.getElementById("respuestaCorrecta").value;
    let nuevoEjercicio = new Ejercicios(idEjercicio, task, respuestaCorrecta);
    arrayEjercicios.push(nuevoEjercicio);
    console.log(arrayEjercicios);
    cajaEjercicios.innerHTML = ``;
    ejerciciosHtml();
    cajaFormEjercicios.innerHTML= ``;
})};

//Repito algo similar, pero para Eliminar Ejercicio

let enviarFormEliminarEjercicioGlobal = null ;
eliminarEjercicio.addEventListener("click", () => {
    Swal.fire({
        //1. Pedido de ingreso de datos del admin.
        title: "Ingresa tu usuario de admin",
        html: `
            <input type="text" id="usuarioIngresadoAdmin" class="swal2-input" placeholder="ingresa tu usuario">
            <input type="text" id="passwordIngresadaAdmin" class="swal2-input" placeholder="ingresa tu contraseña">`,
        confirmButtonText: "Enviar",
        showCancelButton: true, 
        cancelButtonText: "Cancelar",}).then(
            (result)=>{
                if(result.isConfirmed){ 
                    // Si el usuario le dio Enviar (confirm), genero variables para almacenar la información ingresada
                    let usuarioIngresadoAdmin = document.getElementById("usuarioIngresadoAdmin").value;
                    let passwordIngresadaAdmin = document.getElementById("passwordIngresadaAdmin").value;
                    
                    // Si el usuario y contraseña ingresados son los datos del admin, 
                    if (usuarioIngresadoAdmin === usuarioAdmin && passwordIngresadaAdmin === passwordAdmin){
                        
                        // Genero de manera dinámica el form para Eliminar un ejercicio
                        cajaFormEjercicios.innerHTML=`
                        <section class="form">
                            <div class="form__section"><input type="text" id="idEjercicio" class="swal2-input" placeholder="ingresa el ID del Ejercicio que quieres eliminar"></div>
                            <div class="buttonsection">
                                <div class="buttonsection" id="enviarFormEliminarEjercicio"><input type="submit" value="Enviar" class="form__button" id="submit"></div>
                                <div class="buttonsection" id="cerrarForm"><input type="submit" value="Cerrar" class="form__button" id="submit"></div> </div></section> `;
                        
                        // Genero una constante para linkear con el botón que se acaba de generar (el de submit) y la linkeo con una variable global
                        let enviarFormEliminarEjercicio = document.getElementById("enviarFormEliminarEjercicio");
                        enviarFormEliminarEjercicioGlobal = enviarFormEliminarEjercicio;
                        EventListenerBotonEliminarEjercicio();

                        };
                        //asocio el botón cerrar form con un comportamiento que cierra el form
                        const cerrarForm = document.getElementById("cerrarForm");
                        cerrarForm.addEventListener("click", () => {
                            cajaFormEjercicios.innerHTML= ``;
                        });
                        // Si los datos del admin no son correctos, disparo un mensaje de error con Swal Alert 
                            }else {
                                Swal.fire({
                                    title: "Error en los datos de admin",
                                    icon: "error",
                                    confirmButtonText: "ok",
                                })
                            }}
            )})


//Asocio el botón con el comportamiento que elimina un ejercicio
function EventListenerBotonEliminarEjercicio(){
enviarFormEliminarEjercicioGlobal.addEventListener("click", () => {
    let idEjercicio = document.getElementById("idEjercicio").value;
    let ejercicioEliminado = arrayEjercicios.find(ejercicioEliminado => ejercicioEliminado.id === idEjercicio);
    let indice = arrayEjercicios.indexOf(ejercicioEliminado);
    arrayEjercicios.splice(indice, 1);
    console.log(arrayEjercicios);
    cajaEjercicios.innerHTML = ``;
    ejerciciosHtml();
    cajaFormEjercicios.innerHTML= ``;
})};

function ejerciciosHtml (){
    arrayEjercicios.forEach( ejercicio => {
        const div = document.createElement("div");
        div.className = "curso";
        div.innerHTML = `<p class = "task"> ${ejercicio.task} </p>
                        <div class="form__section"><input type="text" id="respuestaIngresada_${ejercicio.idEjercicio}" class="swal2-input" placeholder="ingresa la respuesta del ejercicio"></div>
                        <div class="buttonsection" id="enviarEjercicio_${ejercicio.idEjercicio}"><input type="submit" value="Enviar" class="form__button" id="submit"></div>`;
                    cajaEjercicios.appendChild(div);
                    let enviarEjercicio = document.getElementById(`enviarEjercicio_${ejercicio.idEjercicio}`);
                
                    enviarEjercicio.addEventListener("click", () => {
                        const respuestaIngresada = document.getElementById(`respuestaIngresada_${ejercicio.idEjercicio}`).value.toUpperCase(); 
                        if(respuestaIngresada === ejercicio.respuestaCorrecta) {
                            Swal.fire({
                                title: "Felicitaciones! respuesta correcta",
                                icon: "success",
                                confirmButtonText: "Ok",})
                        } else {
                            Swal.fire({
                                title: "Lo sentimos, esa no es la respuesta correcta. Volvé a intentarlo.",
                                icon: "error",
                                confirmButtonText: "Ok",})
                        }
                    })
                })
            }


ejerciciosHtml();



/*let docenteDelEstudiante = prompt("Ingrese el nombre de su docente")
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
}}*/