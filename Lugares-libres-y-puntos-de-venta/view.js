
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
    L.latLng(-34.51381215945507, -58.70762131519811),
    L.latLng(-34.51552575522018, -58.70572025157648),
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

	botonesComercios()
}



let iconoEstacionamiento = L.icon({
	iconUrl:'../leaflet/images/estacionamiento.png',
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
	dibujarGrupoDePuntosEstacionamientoEnElMapa(estacionamientoPrimerZona, espaciosPrimerZona);
	dibujarGrupoDePuntosEstacionamientoEnElMapa(estacionamientoSegundaZona, espaciosSegundaZona);
}

function dibujarGrupoDePuntosEstacionamientoEnElMapa(zona, estacionamientos){
	for(let x = 0; x < estacionamientos.length; x++){ 
			zona.addLayers([
			L.marker([estacionamientos[x].lat,estacionamientos[x].long], {icon: iconoEstacionamiento}).bindPopup("id:" + estacionamientos.id)
 		 ])
	}
	zona.addTo(map);
}

document.getElementById("botonPuntosComercio").addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("se ejecuta el boton");
  dibujarPuntosComercio(); 
});

function dibujarPuntosComercio() {
	borrarPuntosDelMapa();
	dibujarGrupoDePuntosDeComercioEnElMapa(comercioPrimeraZonaDibujar, comerciosPrimerZona);
	dibujarGrupoDePuntosDeComercioEnElMapa(comercioSegundaZonaDibujar, comerciosSegundaZona);
}

function dibujarGrupoDePuntosDeComercioEnElMapa(zona, puntosDeComercio){
	for(let x = 0; x < puntosDeComercio.length; x++){ 
    		zona.addLayers([
    L.marker([puntosDeComercio[x].lat,puntosDeComercio[x].long], ).bindPopup(getDescripcion(puntosDeComercio[x]))
    ])
  	}
  	zona.addTo(map);
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

		var button = '<input type="submit"  class="menu-botonsito" value='+ comerciosTodasLasZonas[x].id+' id='+ comerciosTodasLasZonas[x].id +' name='+ nombre +'/>';
		
		$('#botonPuntosComerciosIndividuales').append(button);
		
		$("#"+idBoton).click(function() {
    		    console.log("se ejecuta el boton propio"+idBoton);
  			botonesComerciosPropios(comerciosTodasLasZonas[x]);
			escribirInfoComercio(comerciosTodasLasZonas[x]);
    		});

	}
}

function botonesComerciosPropios(comercio){
	borrarPuntosDelMapa()
	comercioPrimeraZonaDibujar.addLayers([
    		L.marker([comercio.lat,comercio.long]).bindPopup(getDescripcion(comercio))
    	]);
 	comercioPrimeraZonaDibujar.addTo(map);
}

function escribirInfoComercio(infoBoton){
	console.log(infoBoton);
	document.getElementById('info-comercios').innerHTML=""//borramos lo que estaba antes
	document.getElementById('info-comercios').innerHTML +=`
	<label>
		Nombre de Comercio: ${infoBoton.nombreComercio}<br>
		id: ${infoBoton.id}<br>
		Rubro: ${infoBoton.rubro}<br>
		Domicilio: ${infoBoton.domicilio}<br>
		Horario Apertura: ${infoBoton.HorarioAbre}<br>
		Horario Cierre: ${infoBoton.HorarioCierre}<br>
	</label>
	`;
	document.getElementById('info-comercios').classList.add('info-comercios-mostrar');
}