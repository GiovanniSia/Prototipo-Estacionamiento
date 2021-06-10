function bootstrap() {

  var ungsLocation = [-34.5221554, -58.7000067];
  var map = L.map('mapid').setView(ungsLocation, 15);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  	L.polygon([
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
]).addTo(map);
	
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
  var cluster = L.markerClusterGroup();
  cluster.addLayers([
    ungsMarker,
	L.marker([-34.51213630176556, -58.7031748566759]),
	L.marker([-34.50961356311936, -58.69419277072243]),
	L.marker([-34.50212815522217, -58.69194742670225]),
	L.marker([-34.51432320261889, -58.685210560615616]),
	L.marker([-34.51785460237468, -58.67520668189791])
  ])
  cluster.addTo(map);

var cluster2 = L.markerClusterGroup();
  cluster2.addLayers([
	L.marker([-34.51669703910317, -58.67175366205695]),
	L.marker([-34.51099562621615, -58.67096469683482]),
	L.marker([-34.50469393110746, -58.67879362399361]),
	L.marker([-34.505626800193454, -58.68391071352228]),
	L.marker([-34.51193139435554, -58.66471188737864])
  ])
  cluster2.addTo(map);
*/



/*
document.getElementById("botonEstacionamientos").addEventListener('submit', (e) => {
    e.preventDefault();
	function a() {


    };
});
*/
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

}