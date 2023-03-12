class CursoVenta {
    constructor(nombre, precio, img, descripcion, id) {
        this.nombre = nombre;
        this.precio = precio; 
        this.img = img;
        this.descripcion = descripcion;
        this.id = id
    }
}

const cursoUno = new CursoVenta("Inglés Inicial", 5000, "./assets/logo4.jpeg", "Este es un curso inicial", "curso1");
const cursoDos = new CursoVenta("Inglés Intermedio", 5000, "./assets/logo4.jpeg", "Este es un curso intermedio", "curso2");
const cursoTres = new CursoVenta("Inglés Avanzado", 5000, "./assets/logo4.jpeg", "Este es un curso avanzado", "curso3");

const arrayCursosVenta = [cursoUno, cursoDos, cursoTres];

const agregarCurso = document.getElementById("agregarCurso");
const eliminarCurso = document.getElementById("eliminarCurso");
const editarCurso = document.getElementById("editarCurso");

const usuarioAdmin = "Admin4";
const passwordAdmin = "admin";



agregarCurso.addEventListener("click", () => {
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
                        cajaForm.innerHTML=`
                        <section class="form">
                            <div class="form__section"><input type="text" id="nombreCurso" class="swal2-input" placeholder="ingresa el nombre del curso"></div>
                            <div class="form__section"><input type="number" id="precioCurso" class="swal2-input" placeholder="ingresa el precio del curso"></div>
                            <div class="form__section"><input type="text" id="descripcionCurso" class="swal2-input" placeholder="ingresa la descripción del curso"></div>
                            <div class="form__section"><input type="text" id="idCurso" class="swal2-input" placeholder="ingresa el ID del curso"></div>
                            <div class="buttonsection">
                                <div class="buttonsection" id="enviarFormAgregarCurso"><input type="submit" value="Enviar" class="form__button" id="submit"></div>
                                <div class="buttonsection" id="cerrarForm"><input type="submit" value="Cerrar" class="form__button" id="submit"></div> </div> </section> `;
                        const enviarFormAgregarCurso = document.getElementById("enviarFormAgregarCurso");
                        enviarFormAgregarCurso.addEventListener("click", () => {
                            let nombre = document.getElementById("nombreCurso").value;
                            let precio = parseInt(document.getElementById("precioCurso").value);
                            let img = "./assets/logo4.jpeg";
                            let descripcion = document.getElementById("descripcionCurso").value;
                            let id = document.getElementById("idCurso").value;
                            let cursoVenta = new CursoVenta(nombre, precio, img, descripcion, id);
                            arrayCursosVenta.push(cursoVenta);
                            console.log(arrayCursosVenta);
                            contenedorTienda.innerHTML= ``;
                            editarTienda();
                        });
                        const cerrarForm = document.getElementById("cerrarForm");
                        cerrarForm.addEventListener("click", () => {
                            cajaForm.innerHTML= ``;
                        });
                            }else {
                                Swal.fire({
                                    title: "Error en los datos de admin",
                                    icon: "error",
                                    confirmButtonText: "ok",
                                })
                            }};
            })
            })


            
    const cajaForm = document.getElementById("cajaForm");
    

eliminarCurso.addEventListener("click", () => {
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
                        cajaForm.innerHTML=`
                        <section class="form">
                            <div class="form__section"><input type="text" id="idCurso" class="swal2-input" placeholder="ingresa el ID del curso"></div>
                            <div class="buttonsection">
                                <div class="buttonsection" id="enviarFormEliminarCurso"><input type="submit" value="Eliminar Curso" class="form__button" id="submit"></div>
                                <div class="buttonsection" id="cerrarForm"><input type="submit" value="Cancelar" class="form__button" id="submit"></div> </div> </section> `;
                        const enviarFormEliminarCurso = document.getElementById("enviarFormEliminarCurso");
                        enviarFormEliminarCurso.addEventListener("click", () => {
                            let id = document.getElementById("idCurso").value;
                            let cursoVenta = arrayCursosVenta.find(cursoVenta => cursoVenta.id === id);
                            let indice = arrayCursosVenta.indexOf(cursoVenta);
                            arrayCursosVenta.splice(indice, 1);
                            console.log(arrayCursosVenta);
                            contenedorTienda.innerHTML= ``;
                            editarTienda();
                        });
                        const cerrarForm = document.getElementById("cerrarForm");
                        cerrarForm.addEventListener("click", () => {
                            cajaForm.innerHTML= ``;
                        });
                            }else {
                                Swal.fire({
                                    title: "Error en los datos de admin",
                                    icon: "error",
                                    confirmButtonText: "ok",
                                })
                            }};
            })
            })


editarCurso.addEventListener("click", () => {
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
                        cajaForm.innerHTML=`
                        <section class="form">
                            <div class="form__section"><input type="text" id="idCurso" class="swal2-input" placeholder="ingresa el ID del curso"></div>
                            <div class="form__section"><input type="text" id="nombreCurso" class="swal2-input" placeholder="ingresa el nombre del curso"></div>
                            <div class="form__section"><input type="number" id="precioCurso" class="swal2-input" placeholder="ingresa el precio del curso"></div>
                            <div class="form__section"><input type="text" id="descripcionCurso" class="swal2-input" placeholder="ingresa la descripción del curso"></div>
                            <div class="buttonsection">
                                <div class="buttonsection" id="enviarFormEditarCurso"><input type="submit" value="Enviar" class="form__button" id="submit"></div>
                                <div class="buttonsection" id="cerrarForm"><input type="submit" value="Cerrar" class="form__button" id="submit"></div> </div> </section> `;
                        const enviarFormEditarCurso = document.getElementById("enviarFormEditarCurso");
                        enviarFormEditarCurso.addEventListener("click", () => {
                            let idBuscado = document.getElementById("idCurso").value;;
                            let cursoVenta = arrayCursosVenta.find(cursoVenta => cursoVenta.id === idBuscado);
                            let indice = arrayCursosVenta.indexOf(cursoVenta);
                            let nombre = document.getElementById("nombreCurso").value;
                            let precio = parseInt(document.getElementById("precioCurso").value);
                            let img = "./assets/logo4.jpeg";
                            let descripcion = document.getElementById("descripcionCurso").value;
                            let cursoModificado = new CursoVenta(nombre, precio, img, descripcion, idBuscado);
                            arrayCursosVenta.splice(indice, 1, cursoModificado);
                            console.log(arrayCursosVenta);
                            contenedorTienda.innerHTML= ``;
                            editarTienda();
                        });
                        const cerrarForm = document.getElementById("cerrarForm");
                        cerrarForm.addEventListener("click", () => {
                            cajaForm.innerHTML= ``;
                        });
                            }else {
                                Swal.fire({
                                    title: "Error en los datos de admin",
                                    icon: "error",
                                    confirmButtonText: "ok",
                                })
                            }};
            })
            })


const contenedorTienda = document.getElementById("contenedorTienda");

function editarTienda (){
arrayCursosVenta.forEach( cursoVenta => {
    const div = document.createElement("div");
    div.className = "curso";
    div.innerHTML = `<p class = "curso__nombre">Nombre: ${cursoVenta.nombre} </p>
                    <p class="curso__precio">Precio: $${cursoVenta.precio} </p>
                    <img class = "curso__img" src =" ${cursoVenta.img}">
                    <p class="curso__descripcion">Descripción: ${cursoVenta.descripcion} </p>
                    <button class="button" id="agregarCarrito${cursoVenta.id}">Agregar al Carrito</button>
                    `;
    contenedorTienda.appendChild(div);
})}

editarTienda();

/*const arrayCarrito = [];

let agregarCarrito = document.getElementById(`agregarCarrito${cursoVenta.id}`);
agregarCarrito.addEventListener("click", ()=>{
    let cursoVenta = 
    arrayCarrito.push(cursoVenta);
    console.log(arrayCarrito);
})
*/