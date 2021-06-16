var map;
var p;
var createMap = async function(nodeId, datosAcarreo) {
    // Ubicación del deposito
    var depositoLocation = [datosAcarreo.deposito.ubicacion.lat, datosAcarreo.deposito.ubicacion.lon];

    // Creación del componente mapa de Leaflet.

	borrarPuntos(p);
	borrarMapa(map);
	
        map = await L.map(nodeId).setView(depositoLocation, 13);
	// Agregamos los Layers de OpenStreetMap.
   	    var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    	var layersControl = L.control.layers({
        "Base": baseLayer
         });
    	layersControl.addTo(map);
    	// hack:
    	map.layersControl = layersControl;
    
    p = L.marker(L.latLng(depositoLocation[0], depositoLocation[1])).bindPopup("Deposito del acarreo: " + datosAcarreo.deposito.nombre + ", direccion:" + datosAcarreo.deposito.direccion + ", horarios:" + datosAcarreo.deposito.horarios + ", telefono: " + datosAcarreo.deposito.telefono);
    p.addTo(map);	

    return map;
}

async function mostrarEnElMapaDeposito(datosAcarreo){
	//var ubicacionDeposito = [datosAcarreo.deposito.ubicacion.lat, datosAcarreo.deposito.ubicacion.lon];
	mapid = $("#mapid");
	mapid.css('display','block')
	await createMap('mapid', datosAcarreo);
}

function borrarMapa(unMapa){
	if(unMapa != null){
		unMapa.remove();
	}
}

function borrarPuntos(puntos){
	if(puntos != null){
		puntos.remove();
	}
}