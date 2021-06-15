
async function mostrarEnElMapaDeposito(datosAcarreo){
	//var ubicacionDeposito = [datosAcarreo.deposito.ubicacion.lat, datosAcarreo.deposito.ubicacion.lon];
	mapid = $("#mapid");
	mapid.css('opacity','1')
	console.log("DATOS ACARREO: ",datosAcarreo);
	await createMap('mapid', datosAcarreo);
}
