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
    var requestTiposInfraccion = function(){
        return $.ajax(url + urlTiposInfraccion)
    }
    //'/api/tiposInfraccion/1'
    var requestTiposInfraccionID = function (tipo_id){
        return $.ajax(url + urlTiposInfraccion + tipo_id)
    }
    //'/api/depositos'
    var requestDepositos = function(){
        return $.ajax(url + urlDepositos)
    }
    //'/api/ABC123/acarreos/42'
    var requestAcarreo = function(patente, infraccion_id){
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
    var extractTiposInfraccion = function(response){
        return responseExtract("tipos", response);
    }
    //'/api/tiposInfraccion/1'
    var extractTiposInfraccionID = function (response){
        return responseExtract("tipo", response);
    }
    //'/api/depositos'
    var extractDepositos = function(response){
        return responseExtract("depositos", response);
    }
    //'/api/ABC123/acarreos/42'
    var extractAcarreo = function(response){
        return responseExtract("acarreo", response);
    }



    
    var mostrarInfracciones = function (response){
        console.log(response)
    }

    requestInfracciones(numPatente)
        .then(extractInfracciones)
        .then(mostrarInfracciones)
        .done(function () {
            console.log("Fin mostrar infracciones.");
        });
};

//$(bootstrap);
