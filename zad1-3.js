/* Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств.
 Данная функция не должна возвращать значение.*/

 let objEntries = function () {
	 //вариант 1
console.log('Ключи: '+ Object.keys(obj) +'\n' +'Значения: '+ Object.values(obj));
	//вариант 2
for (let key in obj) {
	console.log(key); 
	}
  for (let values in obj) {
	console.log(obj[values]);
	}
// вариант 3
console.log(Object.entries(obj));
	};
let obj= {
	name:"Ivan",
	surname: "Ivanov",
	age:25, 
	height:185,
	weight:80
	};
	objEntries(obj);




/*Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект,
 а затем проверяет есть ли у переданного объекта свойство с данным именем.
  Функция должна возвращать true или false.*/

let myFunc = function (str, obj) {

if (obj.hasOwnProperty(str)){
	return console.log(true);
} else { 
	return console.log(false);
		}
	};

let obj2= {
	name:"Ivan",
	surname: "Ivanov",
	age:25, 
	height:185,
	weight:80
	};


myFunc('nahgrhrhme', obj2); 


/*Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.*/

let emptyObj = function () {
	const empty = Object.create(null);
	return empty;
};
console.log (emptyObj());