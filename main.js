class Estudiante {
    constructor(nombre, apellido, email, contrasena){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena;
        this.puntaje = 0;
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
    alert("Formulario enviado")

    const estudiante = new Estudiante (nombre.value, apellido.value, email.value, contrasena.value); 
    arrayEstudiantes.push(estudiante);
    console.log(arrayEstudiantes);


    const arrayEstudiantesJSON= JSON.stringify(arrayEstudiantes);
    localStorage.setItem("arrayEstudiantes", arrayEstudiantesJSON);

    formRegistroEstudiante.reset();
})



//Boton ingreso sesión
const botonInicioSesion = document.getElementById("botonInicioSesion");
botonInicioSesion.addEventListener("click", () => {
    Swal.fire({
        title: "Inicio de Sesión",
        html: `
        <input type="text" id="usuarioIngresado" class="swal2-input" placeholder="ingresa tu mail">
        <input type="text" id="passwordIngresada" class="swal2-input" placeholder="ingresa tu contraseña">`,
        confirmButtonText: "Enviar",
        showCancelButton: true, 
        cancelButonText: "Cancelar",
    }).then((result) =>{
        if(result.isConfirmed)
        {
            const usuarioIngresado = document.getElementById("usuarioIngresado").value;
            const passwordIngresada = document.getElementById("passwordIngresada").value;


            for (let i=0; i < arrayEstudiantes.lenght; i++) {
                if (arrayEstudiantes[i].email === usuarioIngresado && arrayEstudiantes[i].contrasena === passwordIngresada){
                    sessionStorage.setItem("nombreEstudiante", nombreIngresado);
                    sessionStorage.setItem("docenteIngresade", docenteIngresade);
                    window.location.href ="ejercicios.html"} else {
                        Swal.fire({
                            title: "Inicio de sesión fallido",
                            text: "Lo sentimos, tus datos no son correctos. Recargá la página y volvelo a intentar.",
                            icon: "error",
                            confirmButton: "Ok",})
                    }}

        }
    } )
})


const arrayEstudiantesJSON = localStorage.getItem("arrayEstudiantes");
const arrayEstudiantesParse = JSON.parse(arrayEstudiantesJSON);
arrayEstudiantes = arrayEstudiantesJSON;






