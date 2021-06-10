function comercio(lat, long, id) {
  this.lat = lat;
  this.long = long;
  this.id = id;
}

let comerciosPrimerZona = []
comerciosPrimerZona.push(new comercio(-34.51213630176556, -58.7031748566759, 1));
comerciosPrimerZona.push(new comercio(-34.50961356311936, -58.69419277072243, 2));
comerciosPrimerZona.push(new comercio(-34.50212815522217, -58.69194742670225, 3));
comerciosPrimerZona.push(new comercio(-34.51432320261889, -58.685210560615616, 4));
comerciosPrimerZona.push(new comercio(-34.51785460237468, -58.67520668189791, 5));

let comerciosSegundaZona = []
comerciosSegundaZona.push(new comercio(-34.51669703910317, -58.67175366205695, 6));
comerciosSegundaZona.push(new comercio(-34.51099562621615, -58.67096469683482, 7));
comerciosSegundaZona.push(new comercio(-34.50469393110746, -58.67879362399361, 8));
comerciosSegundaZona.push(new comercio(-34.505626800193454, -58.68391071352228, 9));
comerciosSegundaZona.push(new comercio(-34.51193139435554, -58.66471188737864, 10));

let comerciosTodasLasZonas = []
for(let x = 0; x < comerciosPrimerZona.length; x++){ 
	comerciosTodasLasZonas.push(comerciosPrimerZona[x])
}


for(let x = 0; x < comerciosSegundaZona.length; x++){ 
	comerciosTodasLasZonas.push(comerciosSegundaZona[x])
}
