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
    alert("Formulario enviado")

    const estudiante = new Estudiante (nombre.value, apellido.value, email.value, contrasena.value);
    arrayEstudiantes.push(estudiante);
    console.log(arrayEstudiantes);

    formRegistroEstudiante.reset();
})







