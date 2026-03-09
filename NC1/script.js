// scope
//var a =10;
// function test(){
//     console.log(a);
//     function test2(){
//         console.log(a);
//     }
//     test2();
// }
// test();
// function test(){
//     const a = 20;
//     console.log(a);
//     function test2(){
//         console.log(a);
//     }
//     test2();
// }
// test();
// console.log(a);

//hoisting
// console.log(a);
// var a = 10;

// var a;
// console.log(a);
// a = 10;
// console.log(a);

// let a;
// console.log(a);
// a = 10;

// let a = 10;
// let b = 20;
// let c = sum(a, b);
// console.log(c);
// function sum(x, y) {
//     return x + y;
// }
// var sum = function (x, y) {
//     return x + y;
// }
// var sum = (x, y) => {
//     return x + y;
// }
// "use strict";
// a = 10;
// console.log(a);

//console.log(this);
const button = document.querySelector('#button');
button.addEventListener('click', function () {
    console.log(this);
});
// const listItems = document.querySelectorAll('#menu li');
// console.log(listItems);
// [...listItems].forEach(function (item) {
//     item.addEventListener('click', function () {
//         console.log(this);
//         console.log(item);
//     });});