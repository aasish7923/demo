/*
let heading1 = document.getElementById("heading-id");
console.dir(heading1);

let heading2 = document.getElementsByClassName("heading-class");
console.dir(heading2)

let paras = document.getElementsByTagName("p")
console.log(paras)

*/

//better
let firstEl = document.querySelector(".p1");     //returns first element    // #p1 for id
console.dir(firstEl);

let allEl = document.querySelectorAll(".p1");   //returns a nodelist        // not sensible for Id
console.dir(allEl);