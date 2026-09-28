// console.log("Hello world!")
// console.log(123)

// const text = 'hello';

// let thirdText;
// thirdText = '!';

// var fourthText = 'Goodbye';
'use strict'

let secondText = 'world';
let thirdText = 'hi';


// console.log(`Hello ${secondText}`);
// console.log('Hello' + ' ' + secondText);
// console.log(1 * "3");
// console.log(1 / "3");
// console.log(1 - "3");
// console.log(1 ** "3");
// console.log(1 % "3");
// Number()
// String()
// console.log(1 + +"Hello");
// let trueText = true;
// let falseText = false;

//undefined
//null
// let text = null;
// console.log(text);

// let user = {
//     name: 'Vasya',
//     age: 18,
// }
// user.name = 'Minsk'
// console.log(user.address)
// console.log(typeof(user))

// console.log(typeof alert)

//prompt

// let result = prompt('write your name', 'name');
// console.log(result)

// alert('404 error')

// let counter = 1;

// console.log(counter++);

// let num1 = 1;
// let num2 = 1;

// let num3 = ++num1;
// let num4 = num2++;

// console.log(num1);//2
// console.log(num2);//2
// console.log(num3);//2
// console.log(num4);//1

// console.log("1" + 1); 11

//console.log("" + 1 + 0); 10
//console.log("" - 1 + 0); -1
//console.log(true + false); 1
//console.log(6 / "3"); 2
//console.log("6" / "hi"); NaN 
// console.log("2" * "3") 6
//console.log(4 + 5 + "px") 9px
//console.log("$" + 4 + 5) $45

//let result = prompt('write your age', 'age');

// if(result === 1) {
//     console.log('right')
// } else if (result == 1){
//     console.log('right')
// } else {
//     console.log('wrong')
// }
// if (result <=18 && result > 1) {
//     console.log('true')
// }
// if (result <=18 || result > 20) {
//     console.log('true')
// }
//let res = 1;
// if(res > 0 ) {
//     console.log('positive')
// } else {
//     console.log('negative')
// }
// res > 0 ? console.log('positive') : console.log('negative')

// let text = 'word';
// let nweText = text.length;
// let nweText = text.at(-1)
// console.log(nweText);
// let number = 456;
// let firstDigit = String(number)[0];
// let lastDigit = String(number).at(-1);
// let sum = Number(firstDigit) + +lastDigit;
// console.log(firstDigit)
// console.log(lastDigit)
// console.log(sum)

// let numm = 4

// if (numm % 2 == 0) {
//     console.log("chetnoe")
// }
// else {
//     console.log("nechetnoe")
// }
// === строгое равенство. == нестрогое равенство (приводит к одному типу данных)
// let num1 = '1';
// let num2 = 1;

// if(num1 === num2) {
//     console.log("равны")
// } else if( num1 == num2){
//     console.log('Нестрогое равенство приводит к одному типу данных')
// } else {
//     console.log("не равны")
// }

// let first = prompt('firts')
// let second = prompt('second')
// let f_count = first.at(0)
// let s_count = second.at(0)

// if(f_count == s_count){
//     console.log('elements are right')
// }
// else{
//     console.log('elements are not right')
// }

// let inp = prompt('Make a str')
// let lastChar = inp.at(-1)

// if (lastChar == 'ь') {
//     console.log(inp.at(-2))
// }
// else {
//     console.log(lastChar)
// }

// text -> x. a -> nichego

// let our_word = prompt('word')
// let length_word = our_word.length
// let last = our_word.at(-2)

// if (length_word >= 2){
//     console.log(last)
// } else {
//     console.log(' ')
// }
// switch case
// let num = 4;
// switch(num) {
//     case 3:
//         console.log('3');
//         break;
//     case 4: 
//         console.log('4');
//         break;
//     case 5:
//         console.log('5');
//         break;
//     default : 
//         console.log('no numbers');
// }

// let i = 0;
// while (i < 3) {
//     console.log(i);
//     i++;
// }

// for (let j = 0; j < 3; j++) {
//     console.log(j)
// }
// let j = 0;
// for ( ; j < 3; ) {
//     console.log(j)
//     j++
// }

// for (let sixseven = 1; sixseven < 101 ; sixseven++) {
//     console.log(sixseven)
// }

// for (let sixseven = -100 ; sixseven < 1 ; sixseven++) {
//     console.log(sixseven)
// }

// for(let i = 0; i <= 100; ++i)
// {
//     if(i % 2 == 0)
//     {
//         console.log(i)
//     }
// }



// for(let j = 1; j<= 100; ++j) 
// {
//     if(j % 3 == 0) 
//     {
//         console.log(j)
//     }
// }
// let sum = 0;
// for(let i = 1 ; i <= 100 ; ++i){
//     sum += i;

// }
// console.log(sum);
// let sum = 0;
// for (let i = 1 ; i <= 100 ; ++i ) {
//     if (i % 2 != 0){
//         sum +=i; 
//     }  
// }
// console.log(sum);



// function getSum(a, b) {
//     console.log(a + b)
// }

// getSum(num1, num2)
// let num1 = 1;
// let num2 = 2;

// function getSum() {
//     let num1 = 5;
//     let num2 = 6;
//     console.log(num1 + num2)
// }

// function getMultiply(){
//     let num1 = 3;
//     let num2 = 4;
//     console.log(num1 * num2)
// }

// getSum();
// getMultiply();

// let text=prompt('text');
// function getUpper(){
//     let first=text.at(0);
//     let text2=text.slice(1);
//     console.log(first.toUpperCase()+text2);
// }
// getUpper();
// let text= prompt("text");
// function qvartal(){
//     console.log(Math.trunc(text/3)+1);
// }
// qvartal();

// let text= prompt("text");
// function getWek()
// {
//     let wek = Math.ceil(text / 100)
//     console.log(wek)
// }

// getWek();

// Функция перевернутых строк
// function solution(str){
//     return str.split('').reverse().join('');  
// }

//Полином
// function isPalindrome(line) {
//     const str = String(line);
//     const reversedStr = str.split('').reverse().join('');
    
//     return str === reversedStr; 
// }

//Аннограммы
// var isAnagram = function(test, original) {
//     // 1. Приводим обе строки к нижнему регистру
//     // 2. Разбиваем на массивы букв, сортируем и собираем обратно в строки
//     const format = (str) => str.toLowerCase().split('').sort().join('');
    
//     // 3. Сравниваем результаты
//     return format(test) === format(original);
// };

//Минус унарный
// function opposite(number) {
//     return -number;
// }