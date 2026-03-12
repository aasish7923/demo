function discounter(discount){

    return function(value){
          return finalval = value - value* (discount/100);
    };
}

// let calc = discounter(10);
// console.log(calc(500));

// rw example
let ten = discounter(10);
let twenty = discounter(20);

console.log(ten(500));
console.log(twenty(500));
(console.log(twenty(500)));