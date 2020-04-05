//////////////////////////////////////////////////////////////////////////////////////
// Лабораторная работа 1 по дисциплине ЛОИС
// Выполнена студентом группы 721701 БГУИР Подворным Антоном Игоревичем
// Этот файл генерирует формулу, а также создает случайную ошибки со случайной вероятностью.
// <25.02.2020 version 1.0>
//
// Источники: https://learn.javascript.ru/
//		      https://developer.mozilla.org/
// Авторство кода: Подворный Антон Игоревич



function generate(){
	var elem = "ABCDEFGHIJKLMNOPQRSTUVWXYZ10";
	var sign = "&|~!-";
	var count = Math.ceil(Math.random() * 10);
	var signset = "";
	var str = "";

	for (var i = 0; i < count; i++){
		signset += sign.charAt(Math.floor(Math.random() * sign.length));
	}	
	
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
		if(Math.round(Math.random() * 50) == 5){
		   modstr[i] = all.charAt(Math.floor(Math.random() * all.length));
		}
		else{

		modstr += str[i];
	    }
	}
	return modstr;
}

	document.getElementById("formula").value = makeMistake();
