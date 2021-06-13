var tipoInfra
var bootstrap = function () {
    //Para el ejemplo
    var url = Config.url;                //https://infraccionesweb.herokuapp.com/api/
    var urlInfracciones = '/infracciones/';
    var urlTiposInfraccion = 'tiposInfraccion/';
    var urlDepositos = 'depositos/';
    var urlAcarreo = 'acarreos/';
	
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
        console.log(response)
	//actualizarElHTMLConLasInfracciones(response)
        //agregartxt1(response)
	buscarYEscribirLasInfracciones(response)
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
	console.log(response.descripcion);
	tipoInfra = response.descripcion;
	return response.descripcion;
    }

    function agregartxt1(response) {
        document.getElementById("infracciones").innerHTML = "";
        for (let x = 0; x < response.length; x++) {
	    obtenerTipoInfraccion(parseInt(response[x].tipoInfraccion))
            direccionRegistrada = response[x].direccionRegistrada
            existeAcarreo = response[x].existeAcarreo
            fechaHoraActualizacion = response[x].fechaHoraActualizacion
            fechaHoraRegistro = response[x].fechaHoraRegistro
            id = response[x].id
            montoAPagar = response[x].montoAPagar;
            patente = response[x].patente;
            
console.log(tipoInfra);
            var text = document.createTextNode("id: " + id + ", " + direccionRegistrada + ", fecha de actualizacion:" + fechaHoraActualizacion + ", fecha de registro: " + fechaHoraRegistro + ", monto a pagar: " + montoAPagar + ", tipo de infraccion: "+tipoInfra);
		
            document.getElementById("infracciones").appendChild(text);
            var newt = document.createElement("br");
            document.getElementById("infracciones").appendChild(newt); 
        }
    }
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//	Tratando de hacerlo de forma secuencial

	function actualizarElHTMLConLasInfracciones(response) {
		document.getElementById("infracciones").innerHTML = "";
        	for (let x = 0; x < response.length; x++) {
			obtenerTipoDeInfraccion(response[x]).then(escribirEnElHTML(response[x]));
		}
	}

	var obtenerTipoDeInfraccion = function (infraccion){
		tipoInfraccion = obtenerTipoInfraccion(infraccion.tipoInfraccion)
		console.log(tipoInfraccion + " " + tipoInfra + " llego hasta aca")
		return tipoInfraccion
	}

	var escribirEnElHTML = function (infraccion){
		direccionRegistrada = infraccion.direccionRegistrada
            	existeAcarreo = infraccion.existeAcarreo
           	fechaHoraActualizacion = infraccion.fechaHoraActualizacion
            	fechaHoraRegistro = infraccion.fechaHoraRegistro
            	id = infraccion.id
            	montoAPagar = infraccion.montoAPagar;
            	patente = infraccion.patente;
            	tipoInfraccion = tipoInfra

            	var text = document.createTextNode("id: " + id + ", " + direccionRegistrada + ", fecha de actualizacion:" + fechaHoraActualizacion + ", fecha de registro: " + fechaHoraRegistro + ", monto a pagar: " + montoAPagar + ", tipo de infraccion: "+tipoInfraccion);
		
            	document.getElementById("infracciones").appendChild(text);
            	var newt = document.createElement("br");
            	document.getElementById("infracciones").appendChild(newt);
	}
	

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

//SEGUNDO INTENTO DE SECUENCIARLO

	var escribirInfraccionesEnHtml = function (infracciones){
	for (let x = 0; x < infracciones.length; x++) {
		direccionRegistrada = infracciones[x].direccionRegistrada
            	existeAcarreo = infracciones[x].existeAcarreo
           	fechaHoraActualizacion = infracciones[x].fechaHoraActualizacion
            	fechaHoraRegistro = infracciones[x].fechaHoraRegistro
            	id = infracciones[x].id
            	montoAPagar = infracciones[x].montoAPagar;
            	patente = infracciones[x].patente;
            	tipoInfraccion = infracciones[x].tipoInfraccionString

            	var text = document.createTextNode("id: " + id + ", " + direccionRegistrada + ", fecha de actualizacion:" + fechaHoraActualizacion + ", fecha de registro: " + fechaHoraRegistro + ", monto a pagar: " + montoAPagar + ", tipo de infraccion: "+ tipoInfraccion);

            	document.getElementById("infracciones").appendChild(text);
            	var newt = document.createElement("br");
            	document.getElementById("infracciones").appendChild(newt);
	}
}

	var buscarEInsertarLosTiposDeInfracciones = async function (infracciones){
		for (let x = 0; x < infracciones.length; x++) {
			tipoDeInfraccion = await obtenerTipoInfraccion(infracciones[x].tipoInfraccion);
			infracciones[x].tipoInfraccionString = await tipoDeInfraccion;
			console.log(infracciones[x])
		}
		return infracciones;
	};

	async function buscarYEscribirLasInfracciones(infracciones){
		const infraccionesActualizadas = await buscarEInsertarLosTiposDeInfracciones(infracciones)
		await escribirInfraccionesEnHtml(infraccionesActualizadas)
		console.log("Cumplio la segunda de secuencializado")
	}

}


//$(bootstrap);