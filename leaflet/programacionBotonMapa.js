document.ready(function() {

    $("#botonEstacionamientos").click(function() {
        document.getElementById("botonEstacionamientos").addEventListener('submit', (e) => {
    e.preventDefault();
	function a() {
        var estacionamientoPrimerZona = L.markerClusterGroup()
	for(let x = 0; x < espaciosPrimerZona.length; x++){ 
  		estacionamientoPrimerZona.addLayers([
			L.marker([espaciosPrimerZona[x].lat,espaciosPrimerZona[x].long])
 		 ])
	}
	estacionamientoPrimerZona.addTo(map);

	var estacionamientoSegundaZona = L.markerClusterGroup()
	for(let x = 0; x < espaciosSegundaZona.length; x++){ 
  		estacionamientoSegundaZona.addLayers([
			L.marker([espaciosSegundaZona[x].lat,espaciosSegundaZona[x].long])
  		])
	}
	estacionamientoSegundaZona.addTo(map);
    };
});
    });

    $("#botonPuntosComercio").click(function() {
        
    })


});