document.getElementById("button").onclick = function() {

var tmp = document.getElementById("textfeld").value;


//erster Durchgang
    //tmp = tmp.replaceAll(" ", "', <br/>'");
    tmp = tmp.replaceAll(" ", "###");
	tmp = tmp.replaceAll(":", "###");
    tmp = tmp.replaceAll(".", "###");
	tmp = tmp.replaceAll("(", "###");
	tmp = tmp.replaceAll(")", "###");
	tmp = tmp.replaceAll('"', "###");
	tmp = tmp.replaceAll(',', "###");
	tmp = tmp.replaceAll('*', "###");
	tmp = tmp.replaceAll('\n', "###");
	tmp = tmp.replaceAll('…', "###");
	tmp = tmp.replaceAll('?', "###");
	tmp = tmp.replaceAll('!', "###");
	tmp = tmp.replaceAll(';', "###");
	
	
	for (var i = 0; i < 15; i++)
	{
		tmp = tmp.replaceAll("##", "#");
	}		
	
	
	tmp = tmp.split("#");
	tmp = tmp.sort();
	var erg = [...new Set(tmp)];

	
//zweiter Durchgang

//tmp = tmp.replaceAll(",", "', <br/>'");
	
	
	
	
	
    document.getElementById("label").innerHTML ="var Worte = ['" +  erg[0] + " ']";
}
