function comercio(lat, long, id, rubro, domicilio, horarioAbre, HorarioCierre, nombreComercio) {
	this.lat = lat;
  	this.long = long;
  	this.id = id;
  	this.domicilio = domicilio;
	this.HorarioAbre = horarioAbre;
	this.HorarioCierre = HorarioCierre;
	this.nombreComercio = nombreComercio;
	this.rubro = rubro;
}

function getDescripcion(unComercio){
		return "" + unComercio.nombreComercio + ", " + unComercio.rubro + " " + unComercio.domicilio + ", Horario apertura " + unComercio.HorarioAbre + ", horario cierre " +  unComercio.HorarioCierre;
}

let comerciosPrimerZona = []
comerciosPrimerZona.push(new comercio(-34.51213630176556, -58.7031748566759, 1, "Carniceria", "Ruta L(izq) 12", "0:01 am", "23:59 pm", "namsin el matadero"));
comerciosPrimerZona.push(new comercio(-34.50961356311936, -58.69419277072243, 2, "Fiambreria", "avenida bienvenida 1234", "8 am", "5 pm", "John salch."));
comerciosPrimerZona.push(new comercio(-34.50212815522217, -58.69194742670225, 3, "Veterinaria", "Calle itaizungo 2909", "19 pm", "22 pm", "El perro feliz"));
comerciosPrimerZona.push(new comercio(-34.51432320261889, -58.685210560615616, 4, "Kiosko", "Calle ituzaingo 1009", "8 am", " 18 pm", "EL KIOSKO NAHUEL"));
comerciosPrimerZona.push(new comercio(-34.51785460237468, -58.67520668189791, 5, "Verduleria", "Calle John F Macri 69", "8am", "7 am", "La nathi"));

let comerciosSegundaZona = []
comerciosSegundaZona.push(new comercio(-34.51669703910317, -58.67175366205695, 6, "Tienda de electrodomesticos", "Calle sealv 134", "13pm", "15pm", "El androide sabroso"));
comerciosSegundaZona.push(new comercio(-34.51099562621615, -58.67096469683482, 7, "Automotriz", "Calle boquitaElMa..", "0:01 am", "23:59 pm", "El taller del facu"));
comerciosSegundaZona.push(new comercio(-34.50469393110746, -58.67879362399361, 8, "Casa de deportes", "El jeshejojo 1235", "9:35 am", "13:20 pm", "Va muy rapido el sonic"));
comerciosSegundaZona.push(new comercio(-34.505626800193454, -58.68391071352228, 9, "Almacen", "Muy muy lejano 9239898", "22 pm", "23 pm", "El pantano"));
comerciosSegundaZona.push(new comercio(-34.51193139435554, -58.66471188737864, 10, "Pancheria", "En la salida de la uni", "8 am", "22pm", "El panchi"));

let comerciosTodasLasZonas = []
for(let x = 0; x < comerciosPrimerZona.length; x++){ 
	comerciosTodasLasZonas.push(comerciosPrimerZona[x])
}


for(let x = 0; x < comerciosSegundaZona.length; x++){ 
	comerciosTodasLasZonas.push(comerciosSegundaZona[x])
}
