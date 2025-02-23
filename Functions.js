//Functions

function hello(a){
    console.log(a)
}

hello("123")

// Anonymous function

var anony = function(){
    console.log("Anonymous")
}
anony()

//ES6 or arrow fucntion

var arr=()=>{
    console.log("Arrow")
}
arr()

console.log("----------------")

// Function Constructer

var subtract= new Function('a','b','return a-b')
var value=subtract(2,4)
console.log(value)

console.log("----------------")



//import functions

import {printage} from "../Javascript/Importfunctions/Importfile.js"
printage(23)


//import everything

import * as helpers from "../Javascript/Importfunctions/Importfile.js"
helpers.printage(45)
helpers.printgender("Female")



