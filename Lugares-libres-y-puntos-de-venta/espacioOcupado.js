function espacioOcupadoEstacionamiento(lat, long, id, tiempoInicio, tarifa) {
  	this.lat = lat;
  	this.long = long;
  	this.id = id;
	this.tarifa = tarifa;
	this.tiempoInicio = tiempoInicio
}

function getDatosDeEspacioOcupado(espacio) {
	return espacio.id + " " + espacio.tiempoInicio + ", tarifa:" + espacio.tarifa + " "; 
}

function getUbicacionDeEspacioOcupado(espacio){
	return [espacio.lat ,espacio.long]
}

let espaciosOcupados = []
espaciosOcupados.push(new espacioOcupadoEstacionamiento(-34.530597854122945, -58.70129638001595, 1, "16/06/2021 15:30", "$370"));

