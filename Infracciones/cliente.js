var bootstrap = function () {
    var url = Config.url;
    var urlInfracciones = '/infracciones/';
    var urlTiposInfraccion = 'tiposInfraccion/';
    var urlAcarreo = '/acarreos/';

    //'/api/ABC123/infracciones/'
    var requestInfracciones = function (patente) {
        return $.ajax(url + patente + urlInfracciones)
    }

    //'/api/tiposInfraccion/1'
    var requestTiposInfraccionID = function (tipo_id) {
        return $.ajax(url + urlTiposInfraccion + tipo_id)
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

    //'/api/tiposInfraccion/1'
    var extractTiposInfraccionID = function (response) {
        return responseExtract("tipo", response);
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
    }

    async function siHayAcarreo(infraccion) {
        if (infraccion.existeAcarreo) {
            const datosAcarreo = await requestAcarreo(infraccion.patente, infraccion.id)
            const datosAcarreoExtract = await extractAcarreo(datosAcarreo)

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
