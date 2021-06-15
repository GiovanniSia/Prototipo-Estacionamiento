
async function mostrarEnElMapaDeposito(datosAcarreo){
	//var ubicacionDeposito = [datosAcarreo.deposito.ubicacion.lat, datosAcarreo.deposito.ubicacion.lon];
	mapid = $("#mapid");
	mapid.css('display','block')
	console.log("DATOS ACARREO: ",datosAcarreo);
	await createMap('mapid', datosAcarreo);
}
