var bootstrap = function () {
    var url = Config.url;
    var urlInfracciones = '/infracciones/';
    var urlTiposInfraccion = 'tiposInfraccion/';
    var urlDepositos = 'depositos/';
    var urlAcarreo = '/acarreos/';

    //'/api/ABC123/infracciones/'
    var requestInfracciones = function (patente) {
        return $.ajax(url + patente + urlInfracciones)
    }
    //'/api/ABC123/infracciones/42'
    var requestInfraccionID = function (patente, infraccion_id) {
        return $.ajax(url + patente + urlInfracciones + infraccion_id)
    }
    //'/api/tiposInfraccion/'
    var requestTiposInfraccion = function () {
        return $.ajax(url + urlTiposInfraccion)
    }
    //'/api/tiposInfraccion/1'
    var requestTiposInfraccionID = function (tipo_id) {
        return $.ajax(url + urlTiposInfraccion + tipo_id)
    }
    //'/api/depositos'
    var requestDepositos = function () {
        return $.ajax(url + urlDepositos)
    }
    //'/api/ABC123/acarreos/42'
    var requestAcarreo = function (patente, infraccion_id) {
        return $.ajax(url + patente + urlAcarreo + infraccion_id)
    }

    var responseExtract = function (attr, response) {
        return response[attr];
    }

    //'/api/ABC123/infracciones/'
    var extractInfracciones = function (response) {
        return responseExtract("infracciones", response);
    }
    //'/api/ABC123/infracciones/42'
    var extractInfraccionID = function (response) {
        return responseExtract("infraccion", response);
    }
    //'/api/tiposInfraccion/'
    var extractTiposInfraccion = function (response) {
        return responseExtract("tipos", response);
    }
    //'/api/tiposInfraccion/1'
    var extractTiposInfraccionID = function (response) {
        return responseExtract("tipo", response);
    }
    //'/api/depositos'
    var extractDepositos = function (response) {
        return responseExtract("depositos", response);
    }
    //'/api/ABC123/acarreos/42'
    var extractAcarreo = function (response) {
        return responseExtract("acarreo", response);
    }

    var mostrarInfracciones = function (response) {
        escribirLasInfraccionesEnElHtml(response)
    }

    requestInfracciones(numPatente)
        .then(extractInfracciones)
        .then(mostrarInfracciones)
        .done(function () {
            console.log("Fin mostrar infracciones.");
        });

    function obtenerTipoInfraccion(tipo_id) {
        return requestTiposInfraccionID(tipo_id)
            .then(extractTiposInfraccionID)
            .then(mostrarTiposInfraccion)
    }

    var mostrarTiposInfraccion = function (response) {

        return response.descripcion;
    }

    var escribirInfraccionesEnHtml = async function (infracciones) {
        for (let x = 0; x < infracciones.length; x++) {
            direccionRegistrada = infracciones[x].direccionRegistrada

            if (infracciones[x].existeAcarreo === true) {
                existeAcarreo = "Si"
            } else {
                existeAcarreo = "No"
            }
            fechaHoraActualizacion = infracciones[x].fechaHoraActualizacion
            fechaHoraRegistro = infracciones[x].fechaHoraRegistro
            id = infracciones[x].id
            montoAPagar = infracciones[x].montoAPagar;
            patente = infracciones[x].patente;
            tipoInfraccion = infracciones[x].tipoInfraccionString

            var text = document.createTextNode("id: " + id + ", direccion registrada: " + direccionRegistrada + ", fecha de actualizacion: " + fechaHoraActualizacion + ", fecha de registro: " + fechaHoraRegistro + ", monto a pagar: " + montoAPagar + ", existe acarreo: " + existeAcarreo + ", tipo de infraccion: " + tipoInfraccion);

            document.getElementById("infracciones").appendChild(text);
            var newt = document.createElement("br");
            document.getElementById("infracciones").appendChild(newt);
            await siHayAcarreo(infracciones[x])
        }
    }

    var buscarEInsertarLosTiposDeInfracciones = async function (infracciones) {
        for (let x = 0; x < infracciones.length; x++) {
            tipoDeInfraccion = await obtenerTipoInfraccion(infracciones[x].tipoInfraccion);
            infracciones[x].tipoInfraccionString = await tipoDeInfraccion;
        }
        return infracciones;
    };

    async function escribirLasInfraccionesEnElHtml(infracciones) {
        document.getElementById("infracciones").innerHTML = "";
        const infraccionesActualizadas = await buscarEInsertarLosTiposDeInfracciones(infracciones)
        await escribirInfraccionesEnHtml(infraccionesActualizadas)
        console.log("Cumplio la segunda de secuencializado")
    }

    async function siHayAcarreo(infraccion) {
        if (infraccion.existeAcarreo) {
            //aca se hacen los cambios
            //obtengo los datos del acarreo
            const datosAcarreo = await requestAcarreo(infraccion.patente, infraccion.id)
            const datosAcarreoExtract = await extractAcarreo(datosAcarreo)
            console.log(datosAcarreoExtract)

            var text = document.createTextNode("Deposito del acarreo: " + datosAcarreoExtract.deposito.nombre + ", direccion:" + datosAcarreoExtract.deposito.direccion + ", horarios:" + datosAcarreoExtract.deposito.horarios + ", telefono: " + datosAcarreoExtract.deposito.telefono);

            document.getElementById("infracciones").appendChild(text);
            var newt = document.createElement("br");
            document.getElementById("infracciones").appendChild(newt);

            mostrarBotonAbrirMapa(datosAcarreoExtract)
            mapid = $("#mapid");        
          
            newt = document.createElement("br");
            document.getElementById("infracciones").appendChild(newt);
        }
    }
}

function mostrarBotonAbrirMapa(datosAcarreoExtract) {
    const form = document.getElementById("infracciones");
    const button = '<div id="botones_acarreo"><input type="submit" value="ver la ubicacion" id="Abrir_mapa" name="ver la ubicacion"/></div>';
    $('#infracciones').append(button);

    $("#Abrir_mapa").click(function () {
        mostrarEnElMapaDeposito(datosAcarreoExtract)
        mostrarBotonCerrarMapa(mapid);
    });
}

function mostrarBotonCerrarMapa(){
    const buttonBorrar = '<input type="submit" value="Cerrar mapa" id="Cerrar_mapa" name="Cerrar mapa"/>';
    $('#botones_acarreo').append(buttonBorrar);
    $("#Cerrar_mapa").click(function () {
        mapid.css('display', 'none')
        borrarBotonCerrarMapa();
    });
}

function borrarBotonCerrarMapa(){
    const boton = document.querySelector("#Cerrar_mapa");
    padre= boton.parentNode;
    padre.removeChild(boton)
}