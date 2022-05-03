'use strict';

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let someting;
console.log(someting);

let persone = {
    name: "John",
    age: 25,
    isMArried: false
};

console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp']

console.log(arr[0]);
// alert('Hello World!');

// let answer = confirm('Are you here?'); 
// console.log(answer)

// let answer = +prompt('Есть ли вам 18?', "Пошли или да?"); 
// console.log(typeof(answer));

// console.log('arr' + " - object");
// console.log(4 + +"dsd");

let incr = 10,
    decr = 10;
 

console.log(incr++);
console.log(decr--);

console.log('2' === 2);

let isChecked = true,
    isClose = true;

console.log(isChecked || isClose)

