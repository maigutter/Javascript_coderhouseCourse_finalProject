let estudiante = prompt("Ingrese su nombre :) ")
let docenteDelEstudiante = prompt("Ingrese el nombre de su docente")

if(docenteDelEstudiante === "Sabri" || docenteDelEstudiante ==="Mai" || docenteDelEstudiante === "Sabrina" || docenteDelEstudiante ==="Maia" || docenteDelEstudiante ==="maia" || docenteDelEstudiante ==="mai" || docenteDelEstudiante ==="sabri"|| docenteDelEstudiante ==="sabrina" ){
alert("Bienvenide " + estudiante +", estudiante de " + docenteDelEstudiante)
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