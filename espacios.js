function espacioEst(lat, long, id) {
  this.lat = lat;
  this.long = long;
  this.id = id;
}

//var primerEspacio = new espacioEst(-34.52249726820982, -58.7068007280391, 1);

let espaciosPrimerZona = []
espaciosPrimerZona.push(new espacioEst(-34.52249726820982, -58.7068007280391, 1));
espaciosPrimerZona.push(new espacioEst(-34.517791611532346, -58.70315095798039, 2));
espaciosPrimerZona.push(new espacioEst(-34.506693115836974, -58.690425345280694, 3));
espaciosPrimerZona.push(new espacioEst(-34.52641510846728, -58.686220103874675, 4));

let espaciosSegundaZona = []
espaciosSegundaZona.push(new espacioEst(-34.51655318684132, -58.67029077545164, 5));
espaciosSegundaZona.push(new espacioEst(-34.50384872228707, -58.67613019921832, 6));
espaciosSegundaZona.push(new espacioEst(-34.51246663466511, -58.66530911207543, 7));

let espaciosOcupados = []
espaciosOcupados.push(new espacioEst(-34.52957954866747, -58.70044157744358, 8));

/*
let espaciosDisponiblesTodasZonas = []
for(let x = 0; x < espaciosPrimerZona.length; x++){ 
	espaciosDisponiblesTodasZonas.push(espaciosPrimerZona[x])
}
for(let x = 0; x < espaciosSegundaZona.length; x++){ 
	espaciosDisponiblesTodasZonas.push(espaciosSegundaZona[x])
}
*/