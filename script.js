document.getElementById("btnMenu").addEventListener("click",
    function () {
        let elemento= document.getElementById("navbar");
        if (elemento.classList.contains("navbar")) {
            elemento.classList.remove("navbar");
            elemento.classList.add("no_navbar");
        } else {
            elemento.classList.remove("no_navbar");
            elemento.classList.add("navbar");
        }
    
    });
    

const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#numero");
const correo = document.querySelector("#correo");
const contraseña =document.querySelector("#contraseña");
const formulario =document.querySelector(".formulario-registro");
formulario.addEventListener("submit", validaFormulario);
function validaFormulario(e){
    e.preventDefault();
    if (
        nombre.value === "" ||
        telefono.value === "" ||
        correo.value === "" ||
        contraseña.value === ""
    ) {
        mostrarError("Todos los campos son obligatorios");
        return;
    }
    alert("Has sido registrado con exito");
    window.location.reload();
}
function mostrarError(mensaje){
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    alerta.style.background = "red";
    alerta.style.color = "white";
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    },5000);
}
