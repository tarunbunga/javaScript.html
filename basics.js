//->exp1
/*let x=10;
y=20;
z=x+y;
console.log(z);

//--->exp2- function scope
var test=12
function foo(){
    console.log(test);
}
foo();

//-->declare multiple varables in a single ststemanet
//-->exp3
var test=12,
    test2=12,
    test3=16
    function foo(){
        console.log(test,test2,test3);
    }
    foo()
    
//-->exp4 vriable hosting example
console.log(test);
var test=33;//----> undifine 

//-----> redeclaring the variable in th same global block
var test1=30;
var test2=100;
console.log(test1,test2);

//--> exp5-we will redeclare the variable in anther scope and see how it is the oridinal variable
 var age=12;
 function foo(){
    var age=100;
    console.log(age);
 }
 foo();
 console.log(age);
 
 //exp-6--> using strict
 //--> we will try to delete a global variable declared using var in the "use strict" mode
 'use strict';
 var test=12;
 delete(test);
 console.log(test);//it throws an error

 //exp-7
 for(let i=0;i<10;i++){ //-->(basic)

    if(i===5){
        // break;
        continue;
    }
    console.log(i);
}*/
