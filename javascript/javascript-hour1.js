let a=1;   ///global
var b= 6;
if (1){
            let a=5;            //block scope
            var b=7;    // redeclare      //leaks out of braces 
            console.log(a);
            console.log(b);
      }
console.log(a);   // not a=5 one
console.log(b);