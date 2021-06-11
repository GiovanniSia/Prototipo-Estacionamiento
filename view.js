
var map;

  var comercioPrimeraZonaDibujar = L.markerClusterGroup()
  var comercioSegundaZonaDibujar = L.markerClusterGroup()

  var estacionamientoPrimerZona = L.markerClusterGroup()
  var estacionamientoSegundaZona = L.markerClusterGroup()

function bootstrap() {

  var ungsLocation = [-34.5221554, -58.7000067];
  map = L.map('mapid').setView(ungsLocation, 15);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  	primerZona = L.polygon([
    L.latLng(-34.529871, -58.688620),
    L.latLng(-34.518281, -58.671380),
    L.latLng(-34.500427, -58.692358),
    L.latLng(-34.511278, -58.706056),
    L.latLng(-34.511893, -58.705351),
    L.latLng(-34.5140009179718, -58.70790789889449),
    L.latLng(-34.523487920493466, -58.71409824620736),
    L.latLng(-34.53176606104027, -58.702733638905606),
    L.latLng(-34.53182105502062, -58.70031862564283),
    L.latLng(-34.525860154920245, -58.69369666852618),
])
primerZona.options.color = '#FF5733';
primerZona.addTo(map);
	
	L.polygon([
    L.latLng(-34.518212875004565, -58.671293506665755),
    L.latLng(-34.505851515470084, -58.68588658965017),
    L.latLng(-34.50360492659243, -58.68308560319703),
    L.latLng(-34.50341477713323, -58.67322138440612),
    L.latLng(-34.51235133404739, -58.6626180610012)
]).addTo(map);

//  var ungsMarker=L.marker(ungsLocation);
//  ungsMarker.addTo(map);

/*
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
*/

/*
var estacionamientoPrimerZona = L.markerClusterGroup()
for(let x = 0; x < espaciosDisponiblesTodasZonas.length; x++){ 
  estacionamientoPrimerZona.addLayers([
	L.marker([espaciosDisponiblesTodasZonas[x].lat,espaciosDisponiblesTodasZonas[x].long])
  ])
}
estacionamientoPrimerZona.addTo(map);
*/

  //map.addLayer(cluster);
botonesComercios()
}



let iconoEstacionamiento = L.icon({
	iconUrl:'leaflet/images/estacionamiento.png',
	iconSize:[45,45],
	iconAnchor: [30,60]
})




document.getElementById("botonEstacionamientos").addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("se ejecuta el boton");
  dibujarPuntosEstacionamientos(); 
});

function dibujarPuntosEstacionamientos() {
borrarPuntosDelMapa()
	for(let x = 0; x < espaciosPrimerZona.length; x++){ 
  		estacionamientoPrimerZona.addLayers([
			L.marker([espaciosPrimerZona[x].lat,espaciosPrimerZona[x].long], {icon: iconoEstacionamiento}).bindPopup("id:" + espaciosPrimerZona[x].id)
 		 ])
	}
	estacionamientoPrimerZona.addTo(map);

	for(let x = 0; x < espaciosSegundaZona.length; x++){ 
  		estacionamientoSegundaZona.addLayers([
			L.marker([espaciosSegundaZona[x].lat,espaciosSegundaZona[x].long], {icon: iconoEstacionamiento}).bindPopup("id:" + espaciosSegundaZona[x].id)
  		])
	}
	estacionamientoSegundaZona.addTo(map);
}


document.getElementById("botonPuntosComercio").addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("se ejecuta el boton");
  dibujarPuntosComercio(); 
});

function dibujarPuntosComercio() {
borrarPuntosDelMapa()
  for(let x = 0; x < comerciosPrimerZona.length; x++){ 
    comercioPrimeraZonaDibujar.addLayers([
    L.marker([comerciosPrimerZona[x].lat,comerciosPrimerZona[x].long], ).bindPopup(getDescripcion(comerciosPrimerZona[x]))
    ])
  }
  comercioPrimeraZonaDibujar.addTo(map);

  for(let x = 0; x < comerciosSegundaZona.length; x++){ 
    comercioSegundaZonaDibujar.addLayers([
    L.marker([comerciosSegundaZona[x].lat,comerciosSegundaZona[x].long]).bindPopup(getDescripcion(comerciosSegundaZona[x]))
    ])
  }
  comercioSegundaZonaDibujar.addTo(map);

//
//var button = '<input type="submit" value="Numero parrafos" id="num_parrafos" name="Numero Parrafos"/>';
//$('#botonPuntosComercio').append(button);
//$('form').append(button);
}

function borrarPuntosDelMapa(){
	comercioPrimeraZonaDibujar.clearLayers();
	comercioSegundaZonaDibujar.clearLayers();
	estacionamientoPrimerZona.clearLayers();
	estacionamientoSegundaZona.clearLayers();
}

function botonesComercios(){
	const form=document.getElementById("botonPuntosComerciosIndividuales");
	form.addEventListener('submit', (e) => {
 		 e.preventDefault();
	});

	for(let x = 0; x < comerciosTodasLasZonas.length; x++){ 
		nombre = comerciosTodasLasZonas[x].nombreComercio + " " + comerciosTodasLasZonas[x].domicilio
		const idBoton = comerciosTodasLasZonas[x].id

		var button = '<input type="submit" value='+ comerciosTodasLasZonas[x].id+' id='+ comerciosTodasLasZonas[x].id +' name='+ nombre +'/>';
		
		$('#botonPuntosComerciosIndividuales').append(button);
		
		$("#"+idBoton).click(function() {
    		    console.log("se ejecuta el boton propio"+idBoton);
  			botonesComerciosPropios(idBoton);
    		});

/*
		const elBoton=document.getElementById(idBoton);
		elBoton.addEventListener('submit', (e) => {
 			 e.preventDefault();
  			console.log("se ejecuta el boton propio");
  			botonesComerciosPropios(idBoton);
		});
*/
	}
}

function botonesComerciosPropios(idBoton){
	borrarPuntosDelMapa()
	comercioPrimeraZonaDibujar.addLayers([
    		L.marker([comerciosTodasLasZonas[idBoton-1].lat,comerciosTodasLasZonas[idBoton-1].long]).bindPopup(getDescripcion(comerciosTodasLasZonas[idBoton-1]))
    	])
 	comercioPrimeraZonaDibujar.addTo(map);
}