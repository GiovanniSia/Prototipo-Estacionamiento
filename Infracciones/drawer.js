var Drawer = function() {
    return {        
		drawLocationInMap: drawLocationInMap,
        drawStatesInList: drawStatesInList
    }

    /******************************************************************************
     * Función para dibujar una ubicacion en un mapa.
     */
    function drawLocationInMap(location, map) {
        console.log("Dibujando la ubicacion: " + location.lid);

		var info = location.name + " - " + location.state.description;

		// Creamos un marker.		
		var p = L.marker(L.latLng(location.lat, location.lon))
			.bindPopup(info);

		p.addTo(map);		
	}

    /******************************************************************************
     * Función para listar los estados.
     */
    function drawStatesInList(states, nodeId) {        
		states.forEach(function(state) {
            var li = $('<li>');
            li.append(state.description);
            $("#"+nodeId).append(li);
        });
    }
}
