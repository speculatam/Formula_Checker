// ////////////////////////////////////////////////////////////////////////////////////
// Лабораторная работа 1 по дисциплине ЛОИС
// Выполнена студентом группы 721701 БГУИР Подворным Антоном Игоревичем
// Этот файл принимает формулу, написанную вручную, либо сгенерированную файлом generate.js, а также проверяет на правильность.
// <25.02.2020 version 1.0>

// Источники: https://learn.javascript.ru/
// 		      https://developer.mozilla.org/
// Авторство кода: Подворный Антон Игоревич


function check(){
	var form = document.getElementById('formula').value;	
	var reg = /(\([A-Zs0-1](~|(->)|&|\|)[A-Zs0-1]\))|(\(![A-Zs0-1]\))|[A-Zs0-1]/g;

	if (form.search(/s/) == -1) {
		while(form != form.replace(reg, "s")){
			form = form.replace(reg, "s")
		}
		if(form == "s"){
			return true
		} else return false
	} else return false
}


function restruct(answer){
	while(answer.length != 1){	

			answer = answer.replace(/\(!0\)/g, 1)
			answer = answer.replace(/\(!1\)/g, 0)

			answer = answer.replace(/\(0&0\)/g, 0)
			answer = answer.replace(/\(0&1\)/g, 0)
			answer = answer.replace(/\(1&0\)/g, 0)
			answer = answer.replace(/\(1&1\)/g, 1)

			answer = answer.replace(/\(0\|0\)/g, 0)
			answer = answer.replace(/\(0\|1\)/g, 1)
			answer = answer.replace(/\(1\|0\)/g, 1)
			answer = answer.replace(/\(1\|1\)/g, 1)

			answer = answer.replace(/\(0~0\)/g, 1)
			answer = answer.replace(/\(0~1\)/g, 0)
			answer = answer.replace(/\(1~0\)/g, 0)
			answer = answer.replace(/\(1~1\)/g, 1)

			answer = answer.replace(/\(0(->)0\)/g, 1)
			answer = answer.replace(/\(0(->)1\)/g, 1)
			answer = answer.replace(/\(1(->)0\)/g, 0)
			answer = answer.replace(/\(1(->)1\)/g, 1)
	}
	return answer;
}



function valid(){

	if(check() == false) return false
	let atom = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let formula = document.getElementById('formula').value; 
	let symbols = ""
	let count = 0	

	for(i=0;i<formula.length;i++){
		if(atom.includes(formula[i])) count++ 	
	}

	if(count == 0){
		if(restruct(formula) == 0) return false
	} else {
		for(i=0;i<formula.length;i++){
			if(atom.includes(formula[i]) && !symbols.includes(formula[i]))
			symbols += formula[i]
		}

		let n = Math.pow(2, symbols.length) + 1;
		let mas=new Array(n);

		for (i=0; i<n; i++) {
			 mas[i]=new Array(symbols.length);
		}

		for(i=0; i<symbols.length; i++){
			mas[0][i] = symbols[i];
		}


		for(i=1;i<mas.length;i++){
			st = +parseInt(i-1).toString(2) + ""
			st = ('0'.repeat(mas[0].length - st.length) + st).split("")
			mas[i] = st
		}

		console.log(mas)

		let arr = []
		arr.push("answer")
		for(i=1;i<mas.length;i++){
			var reply = formula;
			for(j=0; j<symbols.length; j++){		
				var reg = new RegExp(symbols[j], 'g');
				reply = reply.replace(reg, mas[i][j])
			}	
			arr.push(restruct(reply));
		}
		console.log(arr)


		for(i=1;i<mas.length;i++){
			var reply = formula;
			for(j=0; j<symbols.length; j++){		
				var reg = new RegExp(symbols[j], 'g');
				reply = reply.replace(reg, mas[i][j])
			}	
			if(restruct(reply) == 0){
					return false
			}
		}
	}

	return true
}


function output(){	
	let id = check()
	let id2 = valid()		
	let rad = document.getElementsByName('isFormula');
	let rad2 = document.getElementsByName('isGeneral');
	let ans = document.getElementById('isFormula-answer');
	let ans2 = document.getElementById('isGeneral-answer');
	let gen = document.getElementById('general');
	let gen2 = document.getElementById('general2');


		if (rad[0].checked && id == true) ans.innerHTML = "✔"
		if (rad[0].checked && id == false) ans.innerHTML = "✖"
		if (rad[1].checked && id == true) ans.innerHTML = "✖" 
		if (rad[1].checked && id == false) ans.innerHTML = "✔" 
		
		if (id == true) {gen.innerHTML = "This is the formula";}
		if (id == false) {gen.innerHTML = "This is not a formula";}


		if (rad2[0].checked && id2 == true) ans2.innerHTML = "✔"
		if (rad2[0].checked && id2 == false) ans2.innerHTML = "✖"
		if (rad2[1].checked && id2 == true) ans2.innerHTML = "✖" 
		if (rad2[1].checked && id2 == false) ans2.innerHTML = "✔" 
		
		if (id2 == true) {gen2.innerHTML = "This is a general formula";}
		if (id2 == false) {gen2.innerHTML = "This is a not general formula";} 
}


document.getElementById('to-check').addEventListener('click', output);