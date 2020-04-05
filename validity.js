//////////////////////////////////////////////////////////////////////////////////////
// Лабораторная работа 1 по дисциплине ЛОИС
// Выполнена студентом группы 721701 БГУИР Подворным Антоном Игоревичем
// Этот файл принимает формулу, написанную вручную, либо сгенерированную файлом generate.js, а также проверяет на правильность.
// <25.02.2020 version 1.0>
//
// Источники: https://learn.javascript.ru/
//		      https://developer.mozilla.org/
// Авторство кода: Подворный Антон Игоревич

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


let atom = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let id = true;
//let signs = "!&|~->()"

var formula = document.getElementById('formula').value; 
var symbols = ""
var count = 0

for(i=0;i<formula.length;i++){
	if(atom.includes(formula[i])) count++ 	
}

if(count == 0){
	if(restruct(formula) == 0) id = false
}
if(count > 0 && check() == false){
	for(i=0;i<formula.length;i++){
		if(atom.includes(formula[i]) && !symbols.includes(formula[i]))
		symbols += formula[i]
	}
	var n = Math.pow(2, symbols.length) + 1;
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

	for(i=1;i<mas.length;i++){
		var reply = formula;
		for(j=0; j<symbols.length; j++){		
			var reg = new RegExp(symbols[j], 'g');
			reply = reply.replace(reg, mas[i][j])
		}	

			if(restruct(reply) == 0){
				id = false
				break;
			}
	}
}

console.log(id)



// (K|(!(D&(!1))))


// var people = [
// 		["Tom", 25, false],
// 		["Bill", 38, true],
// 		["Alice", 21, false]
// ];

// console.log(people[0]); // ["Tom", 25, false]
// console.log(people[1]); // ["Bill", 38, true]



// var a = new Array(16);

//  for (i=0; i<16; i++) {
//  	 a[i] = new Array(4);
//  }

//      var k=1,i,j,p,p1=4,N=2,p3=1,t;
//      for(i=1;i<=4;i++){
//         p3=N*p3;
//      }
 
 
//      for(i=0;i<16;i++){
//          for(j=0;j<4;j++){
//              a[i][j]=0;
//          }
//      }
 
 
 
//      for(j=p1-1;j>=0;j--)
//      {
//          for(i=0+k;i<p3;i++)
//          {
//              for(t=0;t<k;t++)
//              {
//                  a[i][j]=1;
//                  i++;
//              }
            
//          }
//              k*=2;
//      }
 
// console.log(a);

