// Constructor clase Estudiante

class Estudiante {
    constructor(nombre, apellido, email, contrasena){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena;
        this.puntaje = 0;
    }
}

//Array estudiantes 
let arrayEstudiantes = [];

// Form registro estudiante - ingreso nuevos estudiantes + pusheo al array 
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
    Swal.fire({
        title: "Formulario Enviado! Tu usuario se generó exitosamente",
        icon: "success",
        confirmButtonText: "ok",
    })

    const estudiante = new Estudiante (nombre.value, apellido.value, email.value, contrasena.value); 
    arrayEstudiantes.push(estudiante);
    console.log(arrayEstudiantes);

    formRegistroEstudiante.reset();

//Tomo el array estudiantes según recién actualizado con el pusheo del estudiante creado con el form y lo JSONeo, generando la nueva variable arrayEstudiantesJSON
    let arrayEstudiantesJSON= JSON.stringify(arrayEstudiantes);
//Guardo arrayEstudiantesJSOn en el Local Storage
localStorage.setItem("arrayEstudiantesLocalStorage", arrayEstudiantesJSON);

})


//Retriveo el array Estudiantes que acabo de guardar en el local storage 
let arrayEstudiantesDelLocalStorage = localStorage.getItem("arrayEstudiantesLocalStorage");
let arrayEstudiantesLocalStorageParse = JSON.parse(arrayEstudiantesDelLocalStorage);
//arrayEstudiantes = arrayEstudiantesParse;

// Agrego un event listener al botón inicio de sesión
const botonInicioSesion = document.getElementById("botonInicioSesion");
botonInicioSesion.addEventListener("click", () => {
    Swal.fire({
        //Genero un form x Sweet Alert que pida un usuario y contraseña
        title: "Inicio de Sesión",
        html: `
        <input type="text" id="usuarioIngresado" class="swal2-input" placeholder="ingresa tu mail">
        <input type="text" id="passwordIngresada" class="swal2-input" placeholder="ingresa tu contraseña">`,
        confirmButtonText: "Enviar",
        showCancelButton: true, 
        cancelButtonText: "Cancelar",
    }).then((result) =>{
        if(result.isConfirmed)
        {
            //Si se ingresó info, almaceno el usuario y contraseña en variables locales
            const usuarioIngresado = document.getElementById("usuarioIngresado").value;
            const passwordIngresada = document.getElementById("passwordIngresada").value;

            //genero un pequeño ciclo que recorra mi array estudiantes buscando una coincidencia en usuario Y contraseña
            for (let i=0; i < arrayEstudiantes.length; i++) {
                if (arrayEstudiantes[i].email === usuarioIngresado && arrayEstudiantes[i].contrasena === passwordIngresada){
                    sessionStorage.setItem("nombreEstudiante", arrayEstudiantes[i].nombre);
                    sessionStorage.setItem("docenteIngresade", arrayEstudiantes[i].apellido);
                    //en caso de que lo encuentre, redirecciono a la página de ejercicios
                    window.location.href ="ejercicios.html"} 
                    else {
                        //Si no, disparo un sweet alert de error 
                        Swal.fire({
                            title: "Inicio de sesión fallido",
                            text: "Lo sentimos, tus datos no son correctos. Recargá la página y volvelo a intentar.",
                            icon: "error",
                            confirmButton: "Ok",})
                    }}
        }
    } )
})










