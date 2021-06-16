function espacioOcupadoEstacionamiento(lat, long, id, tiempoInicio, tarifa, patente) {
  	this.lat = lat;
  	this.long = long;
  	this.id = id;
	this.tarifa = tarifa;
	this.tiempoInicio = tiempoInicio;
	this.patente = patente;
}

function getDatosDeEspacioOcupado(espacio) {
	return "codigo del espacio " + espacio.id + ", tiempo de inicio: " + espacio.tiempoInicio + ", tarifa:" + espacio.tarifa + ", patente del vehiculo: " + espacio.patente; 
}

function getUbicacionDeEspacioOcupado(espacio){
	return [espacio.lat ,espacio.long]
}

let espaciosOcupados = []
espaciosOcupados.push(new espacioOcupadoEstacionamiento(-34.530597854122945, -58.70129638001595, "GAF215", "16/06/2021 15:30", "$10", "AAA000"));
