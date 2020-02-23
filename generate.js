var elem = "ABCDEFGHIJKLMNOPQRSTUVWXYZ10";
var sign = "&|~!-";

function generate(){
	
	var count = Math.ceil(Math.random() * 10);
	var signset = "";
	for (var i = 0; i < count; i++){
		signset += sign.charAt(Math.floor(Math.random() * sign.length));
	}
	var str = "";
	if (signset[0] == "!"){
			str = "(" + "!" + elem.charAt(Math.floor(Math.random() * elem.length)) + ")"
		}
	if (signset[0] == "&" || signset[0] == "|" || signset[0] == "~"){
			str = "(" + elem.charAt(Math.floor(Math.random() * elem.length)) + signset[0] + elem.charAt(Math.floor(Math.random() * elem.length)) + ")"
		}
	if (signset[0] == "-"){
			str = "(" + elem.charAt(Math.floor(Math.random() * elem.length)) + signset[0] + ">" + elem.charAt(Math.floor(Math.random() * elem.length)) + ")"
		}
	for(var i=1; i<=count; i++){
		if (signset[i] == "!"){
			str = "(" + "!" + str + ")";
		}
		if (signset[i] == "&" || signset[i] == "|" || signset[i] == "~"){
			if (Math.floor(Math.random() * 2) == 0){
			str = "(" + elem.charAt(Math.floor(Math.random() * elem.length)) + signset[i] + str + ")";
		    }
			if (Math.floor(Math.random() * 2) == 1){
			str = "(" + str + signset[i] + elem.charAt(Math.floor(Math.random() * elem.length)) + ")";
		    }
	    }
		if (signset[i] == "-"){
			str = "(" + str + signset[i] + ">" + elem.charAt(Math.floor(Math.random() * elem.length)) + ")";
		} 
		
	}
	return str;
}

function makeMistake(){
	str = generate();
	var all = "10()&|~!()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var modstr = "";
	for(i = 0; i < str.length; i++){
		if(Math.round(Math.random() * str.length) == 5){
		   modstr[i] = all.charAt(Math.floor(Math.random() * all.length));
		}
		else{

		modstr += str[i];
	    }
	}
	return modstr;
	alert(modstr);
}

	document.getElementById("formula").value = makeMistake();
