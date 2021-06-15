
async function mostrarEnElMapaDeposito(datosAcarreo){
	//var ubicacionDeposito = [datosAcarreo.deposito.ubicacion.lat, datosAcarreo.deposito.ubicacion.lon];
	var mapid = $("#mapid");
	mapid.css('opacity','1')
	console.log("DATOS ACARREO: ",datosAcarreo);
	await createMap('mapid', datosAcarreo);

	const buttonBorrar = '<input type="submit" value="Cerrar mapa" id="Cerrar_mapa" name="Cerrar mapa"/>';
	$('#mapid').append(buttonBorrar);

	$("#Cerrar_mapa").click(function() {
		mapid = $("#mapid");
		mapid.css('opacity','0')
    	});
}
