class CursoVenta {
    constructor(nombre, precio, img, descripcion) {
        this.nombre = nombre;
        this.precio = precio; 
        this.img = img;
        this.descripcion = descripcion;
    }
}

const cursoUno = new CursoVenta("Inglés Inicial", 5000, "./assets/logo4.jpeg", "Este es un curso inicial");
const cursoDos = new CursoVenta("Inglés Intermedio", 5000, "./assets/logo4.jpeg", "Este es un curso intermedio");
const cursoTres = new CursoVenta("Inglés Avanzado", 5000, "./assets/logo4.jpeg", "Este es un curso avanzado");

const arrayCursosVenta = [cursoUno, cursoDos, cursoTres];


function menu() {
    alert("Bienvenide a la Tienda Virtual!");
    let opcion = parseInt(prompt("Elegí lo que querés hacer: 1)Acceder a la tienda! Quiero comprar. 2) Opción de admin: Agregar un curso a la tienda 3) Opción de admin: Sacar un curso de la tienda 4) Opción de Admin - Modificar un Curso 5) Salir"));
    return opcion;
}


function bienvenida() {
    alert("Bienvenide a la Tienda!");
}

function agregarCurso() {
    let nombre = prompt("Ingrese el nombre del curso: ");
    let precio = parseInt(prompt("Ingrese el precio del curso: "));
    let img = "./assets/logo4.jpeg";
    let descripcion = prompt("Ingrese la descripción del curso: ");
    let cursoVenta = new CursoVenta(nombre, precio, img, descripcion);
    arrayCursosVenta.push(cursoVenta);
    console.log(arrayCursosVenta);
}


function quitarCurso() {
    let nombre = prompt("Ingrese el nombre del curso:  ");
    let cursoVenta = arrayCursosVenta.find(cursoVenta => cursoVenta.nombre === nombre);
    let indice = arrayCursosVenta.indexOf(cursoVenta);
    arrayCursosVenta.splice(indice, 1);
    console.log(arrayCursosVenta);
}


function modificacionCurso() {
    let nombreBuscado = prompt("Ingrese el nombre del curso:  ");
    let cursoVenta = arrayCursosVenta.find(cursoVenta => cursoVenta.nombre === nombreBuscado);
    let indice = arrayCursosVenta.indexOf(cursoVenta);

    let nombre = prompt("Ingrese el nombre del curso: ");
    let precio = parseInt(prompt("Ingrese el precio del curso:  "));
    let img = "./assets/logo4.jpeg";
    let descripcion = prompt("Ingrese la descripción del curso: ");
    let cursoModificado = new CursoVenta(nombre, precio, img, descripcion);

    arrayCursosVenta.splice(indice, 1, cursoModificado);
    console.log(arrayCursosVenta);
}

function salir() {
    alert("Ojalá vuelvas pronto!");
}


let opcion = menu();

switch(opcion) {
    case 1: 
        bienvenida();
        break;
    case 2:
        agregarCurso();
        break;
    case 3: 
        quitarCurso();
        break;
    case 4: 
        modificacionCurso();
        break;
    case 5: 
        salir();
        break;
    default:
        alert("Lo sentimos! Esta no es una opción! Recargá la página y volvé a intentar :)");
        break;
}

const contenedorTienda = document.getElementById("contenedorTienda");

arrayCursosVenta.forEach( cursoVenta => {
    const div = document.createElement("div");
    div.className = "curso";
    div.innerHTML = `<p class = "curso__nombre">Nombre: ${cursoVenta.nombre} </p>
                    <p class="curso__precio">Precio: $${cursoVenta.precio} </p>
                    <img class = "curso__img" src =" ${cursoVenta.img}">
                    <p class="curso__descripcion">Descripción: ${cursoVenta.descripcion} </p>
                    <button class="button" id="agregarCarrito">Agregar al Carrito</button>
                    `;
    contenedorTienda.appendChild(div);
})


