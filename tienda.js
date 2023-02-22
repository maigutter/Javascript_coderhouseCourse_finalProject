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
