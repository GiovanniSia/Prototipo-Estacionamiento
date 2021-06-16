const boton = document.querySelector("#boton-buscar");
let numPatente;
boton.addEventListener("click", function(evento){
    numPatente = document.querySelector("#ingresar-patente").value;
    bootstrap();
})
