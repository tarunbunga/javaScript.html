
//--->OPERATORS
//--> assignment operator
// let b= 199;
// console.log(a=b+1);

// let a= 100;
// let b= 100;
// console.log(x=a+b);

//--> comparion operator(Equality)

// let a = 10; 
// let b = 10;
// let c = new String("comparsion");
// let d = new String("comparsion");
// let e = "comparsion";
// console.log(a==b);
// console.log(b==c);
// console.log(c==d);
// console.log(d==e);

//--> (Inequality)
// let a = 20; 
// let b = 10;
// let c = new String("inequality");
// let d = new String("inequality");
// let e = "inequality";
// console.log(a!=b);
// console.log(c!=d);
// console.log(c!=e);

//-->(strict equality)
// let a = 2, b=2, c=3; 
// let d = {type1:"operator"}; 
// let e = {type2:"comparsion"}; 
// let f = e; 
// console.log(a===b); 
// console.log(a===c); 
// console.log(d===e); 
// console.log(f===e);

//-->(strict Inequality)
// let a = 2; 
// let b="2"; 
// let c = true; 
// let d = null; 
// let e = undefined; 
// console.log(a!==b); 
// console.log(a!==c); 
// console.log(d!==e);

// --> (greaterthan)
// let a = 34;
// let b = 26;
// let c = "55";
// let d = undefined;
// console.log(a>b);
// console.log(c>d);

//--> (greaterthan or equal)
// console.log(8n>=2); 
// console.log(7n>=8); 
// console.log(undefined>=null); 
// console.log(null>=undefined);

//--> (lessthan)
// console.log(4<5n); 
// console.log(5n<4); 
// console.log(undefined<null); 
// console.log(null<undefined)

// --> (lessthan or equal)
// console.log("3"<=2);
// console.log("2"<=3); 
// console.log(true<=false); 
// console.log("3"<="2"); 
// console.log(3<=2);

// --> (LOGICAL OPERATOR(AND))
// let a = 10;
// let b = 5;
// if(a>0 && b>0){
//     console.log("Both are positive numbers");
// } else {
//     console.log("Atleast one positive number")
// }

//--> (LOGICAL OPERATOR(NOT!))
// let isRaining = true; 
// if (!isRaining){
//     console.log("No Its not raining you can go outside");
// }else{
//     console.log("ya its raining better to stay inside of home");
// }

//--> (BITWISE OPERATOR(AND))
// let x = 12;  // Binary: 1100 
// let y = 10;  // Binary: 1010
// let result = x & y; // Binary: 1000
// console.log(result); // Output: 8

//--> (BITWISE OPERATOR(OR))
// let x = 12;  // Binary: 1100 
// let y = 10;  // Binary: 1010
// let result = x | y; // Binary: 1110
// console.log(result); // Output: 14

//--> (BITWISE OPERATOR(XOR))
// let x  = 9; Binary: 1001 
// let y = 7; Binary: 0111
// let result = x^y; Binary: 1110
// console.log(result);

//--> (BITWISE OPERATOR(NOT))
// let x = 16; 
// let result = ~x;
// console.log(result);

//--> (BITWISE OPERATOR(LEFT SHIFT))
// let x = 10; 
// let result = x<<4
// console.log(result);

 // --> (BITWISE OPERATOR(RIGHT SHIFT))
// let x = 20;
// let result = x >> 1;
// console.log(result); 

//--> (UNARY OPERATOR(typeof))
// let number = 42; 
// let string = "Hello, world!";
// let boolean = true;
// let object = { name: "Alice" };
// let array = [1, 2, 3];
// let func = function() { return "Hello!"; };
// let undefinedVar;
// let nullVar = null;

// console.log(typeof number);      
// console.log(typeof string);      
// console.log(typeof boolean);   
// console.log(typeof object);      
// console.log(typeof array);       
// console.log(typeof func);        
// console.log(typeof nullVar);     

// --> (UNARY OPERATOR(delete))
// let person = {      
//     name: "tarun",
//     age: 26,
//     profession: "Software Developer"
//   };
  
//   console.log(person.name); 
//   console.log(person.age); 
//   console.log(person.profession); 
  
//   // Using delete to remove the 'age' property
//   delete person.age;
  
//   console.log(person.age);  // Output: undefined
//   console.log(person);      // Output: { name: "tarun", profession: "Software Developer" }
  
//--> (ROTATIONAL OPERATOR(IN))
// let arr = [1, 2, 3];   

// console.log(0 in arr); // Output: true
// console.log(3 in arr); // Output: false
// console.log("length" in arr); // Output: true

//--> (ROTATIONAL OPERATOR(instanceof))
// let str = ("Hello, world!"); 
// console.log(str instanceof String);  // Output: false

// let strObj = new String("Hello, world!");
// console.log(strObj instanceof String); // Output: true
