// var y=100;
// function f1(x){
//     console.log(x);
//     x=200;
//     console.log(x)

// }
// f1(y);
// console.log(y);

// //ex-->2
// let a=5;
// b=a;
// a=3;// new memory location 
// console.log(a);//3
// console.log(b);//5
// console.log(a==b);

// call by reference
let c={greetings:"wecome"};
let d;
d=c;
c.greetings="welome to login";
console.log(c);
console.log(d);