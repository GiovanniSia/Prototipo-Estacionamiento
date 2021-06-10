var bootstrap = function () {
    //Para el ejemplo
    var url = Config.url;                //https://infraccionesweb.herokuapp.com/api/
    var patente = "ABC123"  //Por el momento asi, a futuro cambiarlo por el valor del input
    var urlInfracciones = '/infracciones/';

    var infraccion_id = "42" //Momentaneo


    var responseExtract = function (attr, response) {
        return response[attr];
    }

    //Extraccion de las infracciones por patente

    var requestInfracciones = function () {
        return $.ajax(url + patente + urlInfracciones);//https://infraccionesweb.herokuapp.com/api/ABC123/infracciones/
    }
    var extractInfracciones = function (response) {
        return responseExtract("infracciones", response);
    }
    var mostrarInfracciones = function (infracciones) {
        console.log(infracciones);
    }

    requestInfracciones()
        .then(extractInfracciones)
        .then(mostrarInfracciones)
        .done(function () {
            console.log("Fin de extraccion de infracciones.");
        });
    
//----------------------------------------------------------------------------------------
    // Extraccion de una infraccion por su infraccion_id
    var requestInfraccionID = function (infraccion_id) {
        return $.ajax(url + patente + urlInfracciones + infraccion_id);
    }
    var extractInfraccionID = function (response) {
        return responseExtract("infraccion", response);
    }
    var mostrarInfraccionID = function (infraccion_id) {
        console.log(infraccion_id)
    }

    requestInfraccionID(infraccion_id)
        .then(extractInfraccionID)
        .then(mostrarInfraccionID)
        .done(function () {
            console.log("Fin de extraccion de infraccionID: "+ infraccion_id);
        });
//----------------------------------------------------------------------------------------

};

$(bootstrap);
