function botonBuscar(){
    const boton = document.querySelector("#boton-buscar");
    boton.addEventListener("click", function (evento) {
        bootstrap(document.querySelector("#ingresar-patente").value);
        mapid = $("#mapid");
        mapid.css('display', 'none');
    })
}
botonBuscar();

function mostrarBotonAbrirMapa(datosAcarreoExtract) {
    const form = document.getElementById("infracciones");
    const button = '<div id="botones_acarreo" ><input type="submit"  class="botones-mapa" value="ver la ubicacion" id="Abrir_mapa" name="ver la ubicacion"/></div>';
    $('#infracciones').append(button);

    $("#Abrir_mapa").click(function () {
        
        mostrarEnElMapaDeposito(datosAcarreoExtract);
        if(!Boolean(document.querySelector("#Cerrar_mapa"))){
            mostrarBotonCerrarMapa();
        }
    });
}

function mostrarBotonCerrarMapa() {
    const buttonBorrar = '<input type="submit"  class="botones-mapa" value="Cerrar mapa" id="Cerrar_mapa" name="Cerrar mapa"/>';
    $('#botones_acarreo').append(buttonBorrar);
    $("#Cerrar_mapa").click(function () {
        mapid.css('display', 'none');
        borrarBotonCerrarMapa();
    });
}

function borrarBotonCerrarMapa() {
    const boton = document.querySelector("#Cerrar_mapa");
    padre = boton.parentNode;
    padre.removeChild(boton);
}