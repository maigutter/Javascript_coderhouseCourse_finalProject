//Recupero arrayEstudiantes del local storage y lo JSON.parseo para poder usar la información del array

const arrayEstudiantesJSON = localStorage.getItem("arrayEstudiantes");
const arrayEstudiantes = JSON.parse(arrayEstudiantesJSON);

const estudianteJSON = localStorage.getItem("estudiante");
const estudiante = JSON.parse(estudianteJSON);

//Recorro el array para generar los objetos 
/*for(let i=0; i < arrayEstudiantes.length; i++){
    const estudiante = arrayEstudiantes[i];
}*/



//Boton ingreso sesión
const botonInicioSesion = document.getElementById("botonInicioSesion");
botonInicioSesion.addEventListener("click", () => {
    Swal.fire({
        title: "Inicio de Sesión",
        html: `<input type="text" id="nombreIngresado" class="swal2-input" placeholder="ingresa tu nombre">
        <input type="text" id="usuarioIngresado" class="swal2-input" placeholder="ingresa tu mail">
        <input type="text" id="passwordIngresada" class="swal2-input" placeholder="ingresa tu contraseña">
        <input type="text" id="docenteIngresade" class="swal2-input" placeholder="ingresa el nombre de tu docente">`,
        confirmButtonText: "Enviar",
        showCancelButton: true, 
        cancelButonText: "Cancelar",
    }).then((result) =>{
        if(result.isConfirmed){
            const usuarioIngresado = document.getElementById("usuarioIngresado").value;
            const passwordIngresada = document.getElementById("passwordIngresada").value;
            const docenteIngresade = document.getElementById("docenteIngresade").value;
            const nombreIngresado = document.getElementById("nombreIngresado").value;

            // función para chequear que el usuario ingresado y la contraseña ingresada coincidan con algún objeto en el array que fue retriveado desde el local storage... si es correcto, redireccionar a ejercicios
            if (usuarioIngresado === estudiante.email && passwordIngresada === estudiante.password && (docenteIngresade.toUpperCase()==="MAI" || docenteIngresade.toUpperCase()==="SABRI" || docenteIngresade.toUpperCase()==="LALO" || docenteIngresade.toUpperCase()==="MAIA" || docenteIngresade.toUpperCase()==="SABRINA")){
                sessionStorage.setItem("nombreEstudiante", nombreIngresado);
                sessionStorage.setItem("docenteIngresade", docenteIngresade);
                window.location.href ="ejercicios.html"
            } else {
                Swal.fire({
                    title: "Inicio de sesión fallido",
                    text: "Lo sentimos, tus datos no son correctos. Recargá la página y volvelo a intentar.",
                    icon: "error",
                    confirmButton: "Ok",
                })
            }
        }
    } )
})









