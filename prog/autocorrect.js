document.getElementById("mybutton").onclick = function(){
var tmp = document.getElementById("text").value;
var tmp2;

// ToDo: Lese hier aus einer TXT (wort.txt) - Datei den Inhalt in eine variable und gebe diesen aus!

var wort_array =['Planet', 'Stern', 'Galaxie']
	
var worte = 

var tmp_array = tmp.split(" ");

var wort_array_lgth = wort_array.length;

tmp = " "+tmp+" ";

tmp = tmp.replaceAll(" ", "---");
tmp = tmp.replaceAll("\n", "---");

document.getElementById("label").innerHTML = "";
document.getElementById("label").innerHTML += tmp+"\n\n\n<br><br>";
				
				
//wort_array[0]=Planet
//wort_array[1]=Galaxie
//wort_array[2]=Stern
				
				
				
for (var i = 0; i < wort_array_lgth; i++)
{
	var substantiv = "---"+wort_array[i]+"---";
	var substklein = substantiv.toLowerCase();	
	tmp = tmp.replaceAll(substklein, substantiv);		
	
	var substantiv = "---"+wort_array[i]+".";
	var substklein = substantiv.toLowerCase();	
	tmp = tmp.replaceAll(substklein, substantiv);		

	var substantiv = "---"+wort_array[i]+",";
	var substklein = substantiv.toLowerCase();	
	tmp = tmp.replaceAll(substklein, substantiv);		

}


//Planeten Gasriesen Gaalxien
//Stern
//

//Planeten---Gasreisen---Galaxien---Stern---Astern---

/*for (var i = 0; i < tmp3_lgth; i++)
{
	var substantiv = "---"+tmp3[i]+"---";
	var substklein = substantiv.toLowerCase();	
	tmp = tmp.replaceAll(substklein, substantiv);		
	
	var substantiv = "---"+tmp3[i]+".";
	var substklein = substantiv.toLowerCase();	
	tmp = tmp.replaceAll(substklein, substantiv);		

	var substantiv = "---"+tmp3[i]+",";
	var substklein = substantiv.toLowerCase();	
	tmp = tmp.replaceAll(substklein, substantiv);		

}*/

tmp = tmp.replaceAll("Abgespeist", "Abgespaced");

/*	if(tmp==tmp3[0]|| tmp==tmp3[1]|| tmp==tmp3[2]){
		tmp2='richtig';
	}else {
		tmp2='falsch'
	}*/

	
	tmp = tmp.replaceAll("---", " ");
	document.getElementById("label").innerHTML += tmp;
	document.getElementById("text").value = tmp; 

}