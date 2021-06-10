var cardapio = [];
cardapio[0] = {
    "grupo": "FAMILIA",
    "Pratos": ["FRANGO CRISPY", "CALABRESA ACEBOLADA", "CRISPY PREMIUM", "FILEZINHO ACEBOLADO", "CARNE DO SOL", "CAMARÃO ALHO & OLÉO (S/CABECA)", "FUMEIRO ACEBOLADO"],
    "Valores": [49.90, 52.90, 69.90, 74.90, 74.90, 84.90, 89.90]
};

cardapio[1] = {
    "grupo": "COMBINADOS",
    "Pratos": ["FRANGO CRISPY", "CALABRESA ACEBOLADA", "CRISPY PREMIUM", "FILEZINHO ACEBOLADO", "CARNE DO SOL", "CAMARÄO ALHO & OLÉO (S/CABECA)", "FUMEIRO ACEBOLADO"],
    "Valores": [27.90, 32.90, 36.00, 39.90, 39.90, 45.00, 49.00]
};

cardapio[2] = {
    "grupo": "PORCOES",
    "Pratos": ["ARROZ | FAROFA | VINAGRETE", "COXINHA | KIBE", "BATATA FRITA | ONION | AIPIM", "BOLINHO DE QUEUO", "PASTEL SIMPLES", "PASTEL ESPECIAL", "CAMARÄO ENCAPOTADO", "BATATA FRITA 3 QUEIJOS", "BATATA PREMIUM", "BATATA DA CASA", "CAMARÄO ALHO & OLÉO (S/CABECA)"],
    "Valores":[7.00, 12.00, 15.00, 16.00, 13.00, 19.00, 22.00, 25.00, 25.00, 30.00, 39.00]
};

cardapio[3] = {
    "grupo": "ACOMPANHAMENTOS",
    "ACOMP_FAM" : ["BATATA FRITA", "AIPIM", "ONION RING", "FAROFA", "FAROFA DA CASA", "VINAGRETE"],
    "A_PARTE": ["CALABRESA ACEBOLADA", 15],
    "ACOMP_COMB": ["BATATA FRITA", "AIPIM", "ONION RING"]
};

cardapio[4] = {
    "grupo": "MOLHOS",
    "MOLHOS": ["BARBECUE", "BARBECUE PICANTE", "CHEDDAR", "MOSTARDA E MEL", "ROSÉ", "TÁRTARO", "CATUPIRY"]
};

cardapio[5] = {
    "grupo": "BEBIDAS",
    "Pratos": ["CHÁ GELADO", "CERVEJA 350ML", "REFRIGERANTE 1L", "REFRIGERANTE 1,5L"],
    "Valores":[4.00, 5.00, 7.50, 10.00]
};

function mostrar(id){
	if (document.getElementById(id).style.display != "none"){
		document.getElementById(id).style.display = "block";
	}
	Array.from(document.getElementsByClassName("table")).forEach(
		div => (div.style.display = "none")
	);
	document.getElementById(id).style.display = "block";
	$("button").click(function(){
		$("p").css("background-color", "yellow");
	});
}

$(document).ready(function(){
	var grupoCardapio = ["tableFAM", "tableCOM", "tablePOR", "tableACOMP", "tableMOL" , "tableBEB"];
    for(pos=0; pos < grupoCardapio.length; pos++){
        var tabela = document.getElementById(grupoCardapio[pos]);
		var NL=0;
		if(grupoCardapio[pos] == 3 || grupoCardapio[pos] == 4){
			switch (grupoCardapio[pos]){
				case 3:
					console.log("Wednesday");
					break;
				case 4:
					console.log("Thursday");
					break;
			}
		}else{
			for(j=0; j < cardapio[pos].Pratos.length; j++){
				var linha = tabela.insertRow(NL);
				var celula1 = linha.insertCell(0);
				var celula2 = linha.insertCell(1);
				var celula3 = linha.insertCell(2);
				celula1.className = 'tableLeft';
				celula2.className = 'tableRigth';
				celula3.className = 'buttonSelect';
				celula1.innerHTML = cardapio[pos].Pratos[j];
				celula2.innerHTML = "R$ "+cardapio[pos].Valores[j];
				celula3.innerHTML = "<label ><input type = 'checkbox'><span className = 'slider round' ></span></label>";
				NL++;
			}		
		}
    }
});
