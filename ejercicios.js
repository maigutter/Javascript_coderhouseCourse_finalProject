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

const agregarEjercicio = document.getElementById("agregarEjercicio");
const eliminarEjercicio = document.getElementById("eliminarEjercicio");
const editarEjercicio = document.getElementById("editarEjercicio");
const cajaEjercicios = document.getElementById("cajaEjercicios");

class Ejercicios {
    constructor(idEjercicio, task, respuestaCorrecta) {
        this.idEjercicio = idEjercicio;
        this.task = task; 
        this.respuestaCorrecta = respuestaCorrecta;
    }
}

/*const ejercicioUno = new Ejercicios ("ejercicioUno", "¿Cuál es el SIMPLE PAST del verbo TO BE para el sujeto SHE?", "WAS");
const ejercicioDos = new Ejercicios ("ejercicioDos", "¿Cuál es el PARTICIPLE del verbo TO DO?", "DONE");
const ejercicioTres = new Ejercicios ("ejercicioTres", "¿Cuál es el SIMPLE PRESENT del verbo TO BE para el sujeto I?", "AM");*/

const arrayEjercicios = [];

const agregarCurso = document.getElementById("agregarCurso");
const eliminarCurso = document.getElementById("eliminarCurso");
const editarCurso = document.getElementById("editarCurso");

const usuarioAdmin = "Admin4";
const passwordAdmin = "admin";
agregarEjercicio.addEventListener("click", () => {
    Swal.fire({
        title: "Ingresa tu usuario de admin",
        html: `
            <input type="text" id="usuarioIngresadoAdmin" class="swal2-input" placeholder="ingresa tu usuario">
            <input type="text" id="passwordIngresadaAdmin" class="swal2-input" placeholder="ingresa tu contraseña">`,
        confirmButtonText: "Enviar",
        showCancelButton: true, 
        cancelButonText: "Cancelar",}).then(
            (result)=>{
                if(result.isConfirmed){ 
                    const usuarioIngresadoAdmin = document.getElementById("usuarioIngresadoAdmin").value;
                    const passwordIngresadaAdmin = document.getElementById("passwordIngresadaAdmin").value;
                    if (usuarioIngresadoAdmin === usuarioAdmin && passwordIngresadaAdmin === passwordAdmin){
                        cajaEjercicios.innerHTML=`
                        <section class="form">
                            <div class="form__section"><input type="text" id="idEjercicio" class="swal2-input" placeholder="ingresa el ID del Ejercicio"></div>
                            <div class="form__section"><input type="text" id="task" class="swal2-input" placeholder="ingresa el task del ejercicios"></div>
                            <div class="form__section"><input type="number" id="respuestaCorrecta" class="swal2-input" placeholder="ingresa la respuesta del ejercicio"></div>
                            <div class="buttonsection">
                                <div class="buttonsection" id="enviarFormAgregarEjercicio"><input type="submit" value="Enviar" class="form__button" id="submit"></div>
                                <div class="buttonsection" id="cerrarForm"><input type="submit" value="Cerrar" class="form__button" id="submit"></div> </div> </section> `;
                        const enviarFormAgregarEjercicio = document.getElementById("enviarFormAgregarEjercicio");
                        enviarFormAgregarEjercicio.addEventListener("click", () => {
                            let idEjercicio = document.getElementById("idEjercicio").value;
                            let task = document.getElementById("task").value;
                            let respuestaCorrecta = document.getElementById("respuestaCorrecta").value;
                            let nuevoEjercicio = new Ejercicios(idEjercicio, task, respuestaCorrecta);
                            arrayEjercicios.push(nuevoEjercicio);
                            console.log(arrayEjercicios);
                        });
                        };
                        const cerrarForm = document.getElementById("cerrarForm");
                        cerrarForm.addEventListener("click", () => {
                            cajaEjercicios.innerHTML= ``;
                        });
                            }else {
                                Swal.fire({
                                    title: "Error en los datos de admin",
                                    icon: "error",
                                    confirmButtonText: "ok",
                                })
                            }}
            )})


function ejerciciosHtml (){
    arrayEjercicios.forEach( ejercicio => {
        const div = document.createElement("div");
        div.className = "curso";
        div.innerHTML = `<p class = "task"> ${ejercicio.task} </p>
                        <div class="form__section"><input type="number" id="respuestaIngresada" class="swal2-input" placeholder="ingresa la respuesta del ejercicio"></div>
                        <div class="buttonsection" id="enviarEjercicio"><input type="submit" value="Enviar" class="form__button" id="submit"></div>`;
                    cajaEjercicios.appendChild(div);
                    const enviarEjercicio =document.getElementById("enviarEjercicio");
                    enviarEjercicio.addEventListener("click", () => {
                        const respuestaIngresada = document.getElementById("respuestaIngresada").value.toUpperCase; 
                        if(respuestaIngresada === ejercicio.respuestaCorrecta) {
                            Swal.fire({
                                title: "Felicitaciones! respuesta correcta",
                                icon: "success",
                                confirmButtonText: "Ok",})} else {
                                    Swal.fire({
                                        title: "Lo sentimos, esa no es la respuesta correcta. Volvé a intentarlo.",
                                        icon: "error",
                                        confirmButtonText: "Ok",})
                                }
                    })
                })}

ejerciciosHtml();