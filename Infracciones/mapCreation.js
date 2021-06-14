/******************************************************************************
 * Función para crear un mapa.
 */
var createMap = function(nodeId, datosAcarreo) {
    // Ubicación del deposito
    var depositoLocation = [datosAcarreo.deposito.ubicacion.lat, datosAcarreo.deposito.ubicacion.lon];

    // Creación del componente mapa de Leaflet.
    var map = L.map(nodeId).setView(depositoLocation, 13);

    // Agregamos los Layers de OpenStreetMap.
    var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

	console.log(depositoLocation + " lerolero")
    var layersControl = L.control.layers({
        "Base": baseLayer
    });
    layersControl.addTo(map);
    // hack:
    map.layersControl = layersControl;

    return map;
}
