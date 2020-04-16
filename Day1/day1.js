// Data Type
let foo;
console.log(foo);
foo= 42;
console.log(foo);
foo= "Hello World";
console.log(foo);

// undefined
let bar;
console.log(typeof foo);
if(bar) {
    console.log("test");
}else {
    console.log("else");
}
// boolean
bar = true;
console.log(bar);
bar = !12; // negation
console.log(bar); // check negation for undefined variables

// Number

var num = 12;
console.log(num);
var notAnumber;
console.log(num+notAnumber);

// String
var str= "Hello World";
console.log(str);
var str2 = str.slice(1,3);// el
str.split("");
// substr - Returns the characters in a string beginning at the specified location through the specified number of characters.
// substring(indexStart, [indexEnd]) - Returns a new string containing characters of the calling string from (or between) the specified index (or indeces).


// BigInt  
// extention on size of number(64 bit)

// Object
let obj1 = {};
let obj2 = new Object();
console.log(obj1 == obj2);
console.log(obj1 instanceof Object);
console.log(obj2 instanceof Object); 
obj1.test = 123;
console.log(obj1);
let str= "test2";
obj1[str] = "Hello World";
console.log(Object.keys(obj1));
obj1.test = "modified";
let str = "hello!!";
function testString(str) {
    console.log(str);
    str= 'hello Again';
    console.log(str);
}
testString(str);
console.log(str);
function testObj(newObj) {
    newObj.test2 = "Hello World Again!";
}
testObj(obj1);
console.log(obj1);

//DefineProperty
// Example 1
"use strict"
let object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// Example 2
let obj = {};
Object.defineProperty(obj, 'a', {
    value: 37,
    writable: true,
    enumerable: true,
    configurable: true
  });
obj.b = 35;
// enumerable test
  for(prop in obj){
    console.log("prop: "+ prop+ " value"+ obj[prop]);
  }
// Test for configurable property


// Data access property
var bValue = 38;
obj={};
Object.defineProperty(obj, 'b', {
  // Using shorthand method names (ES2015 feature).
  // This is equivalent to:
  // get: function() { return bValue; },
  // set: function(newValue) { bValue = newValue; },
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});

// null
let a= null;
console.log(typeof a);

// Symbol
let sym1 = Symbol("Sym");
let sym2 = Symbol("Sym");
console.log(sym1 == sym2)
var obj ={};
obj[sym1] = 123;
console.log(obj);

// Dates example
let date = new Date();
console.log(date.setDate(04));

// Arrays
var a = [];
b= new Array();
console.log(a);
console.log(typeof a);
 // slice
 const arr = [1,2,3,4];
 arr.slice(2,3);// 3
 console.log(arr); // NO change in array
 
// splice
arr.splice(2,3, 5);//  [3,4]
console.log(arr); // modified array
// join and split
// reduce
const array1 = [1, 2, 3, 4];
const reducer = function(accumulator, currentValue) { 
    return accumulator + currentValue; 
}

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));

