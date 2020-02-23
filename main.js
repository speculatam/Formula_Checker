let atom = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let id = true;

function noSpace(){
id = true;
var form = document.getElementById('formula').value;
var newform = "";

	for(i=0;i<form.length; i++){
		if(form[i] == " "){
		   continue;
		}else{
		   newform += form[i];
		}
	}
document.getElementById("formula").value = newform;		
}

function checkBrackets() {

var form = document.getElementById('formula').value;;
var ob = 0;
var cb = 0;
	for (i=0; i<form.length; i++){
		if (form[i] == "(") {ob++;}
		if (form[i] == ")") {cb++;}
	}
    if (ob != cb) {
	    id = false;
    }
return id;    
}


function checkEmptyBrackets() {

var form = document.getElementById('formula').value;
var ob = 0;
var cb = 0;
	for (i=0; i<form.length; i++){
		if ((form[i] == "(" && form[i+1] == ")") || (form[i] == ")" && form[i+1] == "(")) {
		   id = false;	
		}
	}
return id; 
}

function checkCountBrackets() {

var form = document.getElementById('formula').value;
var ob = 0;
var sg = 0;
	for (i=0; i<form.length; i++){
		if (form[i] == "(") {ob++;}
		if (form[i] == "!" || form[i] == "&" || form[i] == "|" || form[i] == "-" || form[i] == "~") {sg++;}
	}
if (ob != sg) {
	id = false;
}
return id;
}

function checkImpl(){

var form = document.getElementById('formula').value;
	for (i=0; i<form.length; i++){
		if(form[i] == "-" && form[i+1] != ">"){
         	id = false
        }
        if(form[i] == ">" && form[i-1] != "-"){
         	id = false;
        }
		
		if (form[i] == "-"){
			if(form[i+2] != 1 && form[i+2] != 0 && atom.includes(form[i+2]) == false && form[i+2] != "("){
				id = false;
			}
			if((atom.includes(form[i+2]) == true || form[i-1] == 1 || form[i-1] == 0) && (form[i+3] != ")")) {
				id = false;
			}		
			if(form[i-1] != 1 && form[i-1] != 0 && atom.includes(form[i-1]) == false && form[i-1] != ")"){
				id = false;
			}
			if((atom.includes(form[i-1]) == true || form[i-1] == 1 || form[i-1] == 0) && (form[i-2] != "(")) {
				id = false;
			}		
		}	
	}
return id;	
}


function checkSigns(){

var form = document.getElementById('formula').value;
	for (i=0; i<form.length; i++){
		if (form[i] == "&" || form[i] == "|" || form[i] == "~"){
			if(form[i+1] != 1 && form[i+1] != 0 && atom.includes(form[i+1]) == false && form[i+1] != "("){
				id = false;
			}
			if((atom.includes(form[i+1]) == true || form[i-1] == 1 || form[i-1] == 0) && (form[i+2] != ")")) {
				id = false;
			}
			if(form[i-1] != 1 && form[i-1] != 0 && atom.includes(form[i-1]) == false && form[i-1] != ")"){
				id = false;
			}
			if((atom.includes(form[i-1]) == true || form[i-1] == 1 || form[i-1] == 0) && (form[i-2] != "(")) {
				id = false;
			}
		}	
	}
return id;
}

function checkDenial(){

var form = document.getElementById('formula').value;
    for (i=0; i<form.length; i++){
		if (form[i] == "!"){
			if(form[i+1] != 1 && form[i+1] != 0 && atom.includes(form[i+1]) == false && form[i+1] != "("){
				id = false;
			}
			if((atom.includes(form[i+1]) == true || form[i-1] == 1 || form[i-1] == 0) && (form[i+2] != ")")) {
				id = false;
			}
			if(form[i-1] != "("){
				id = false;
			}
		}	
	}
return id;		
}


function checkAtom(){
	
var form = document.getElementById('formula').value;
	for (i=0; i<form.length; i++){
		if (atom.includes(form[i]) == true || form[i] == 1 || form[i] == 0){
			if(form[i+1] != null || form[i-1] != null){
				if(form[i+1] != "&" && form[i+1] != "|"  && form[i+1] != "-" && form[i+1] != "~"){			
					if(form[i-1] != "&" && form[i-1] != "|"  && form[i-1] != ">" && form[i-1] != "~" && form[i-1] != "!"){
				   	   id = false;
				    }   
			    }
			}    
		}	 
	}
return id;	
}

function output(){

var rad = document.getElementsByName('isFormula');
var ans = document.getElementById('isFormula-answer');

	if (rad[0].checked && id == true) {ans.innerHTML = "✔";}
	if (rad[0].checked && id == false) {ans.innerHTML = "✖";}
	if (rad[1].checked && id == true) {ans.innerHTML = "✖";} 
	if (rad[1].checked && id == false) {ans.innerHTML = "✔";}   
}

document.getElementById('to-check').addEventListener('click', noSpace);
document.getElementById('to-check').addEventListener('click', checkBrackets);
document.getElementById('to-check').addEventListener('click', checkImpl);
document.getElementById('to-check').addEventListener('click', checkSigns);
document.getElementById('to-check').addEventListener('click', checkDenial);
document.getElementById('to-check').addEventListener('click', checkAtom);
document.getElementById('to-check').addEventListener('click', checkEmptyBrackets);
document.getElementById('to-check').addEventListener('click', checkCountBrackets);
document.getElementById('to-check').addEventListener('click', output);