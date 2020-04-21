// ES6 
// let const 
console.log(product) // undefined
var product = 10;

console.log(product)// error Cannot access 'product' before initialization
let product= 10;
// ==Example

"use strict"
let product1 = 10;
{
    let product1=200;
}
console.log(product1); // 10

// ====== Example

function getProduct() {
    productId= 12;
}
let productId ;
getProduct();
console.log(productId); // 12;

// ======Example

// closer example
let updateFunctions= [];
for(var i=0;i<2;i++){

    updateFunctions.push(

        function(){
            return i;
        }
    );
}
console.log(updateFunctions[0]());

// closer with let
let updateFunctions= [];
for(var i=0;i<2;i++){

    updateFunctions.push(

        function(){
            return i;
        }
    );
}
console.log(updateFunctions[0]());

// CONST
const MAX_VALUE = 100;
console.log(MAX_VALUE);

const MAX_VALUE;
console.log(MAX_VALUE); // Syntax ERROR 

const AVG_COST = 10;
if(AVG_COST>5) {
    const AVG_COST = 20;
}
console.log(AVG_COST);


// Arrow function =>

var getPrice = function() {
    return 400;
}
var getPrice = () => 400;
getPrice();

var getValue = function(val) {
 return val*2;
}
var getValue = val => val*2;
getValue(10);

var getMultiple = (val1, val2) => {
return val1*val2;
}


var invoice = {
    value: 100,
    process: function() {
        console.log(this.value);
    }
}
invoice.process(); // 100

var invoice = {
  value: 100,
  process: () => {
      console.log(this.value);
  }
}
invoice.process();// undefined

// you can't bind arrow function with any object

"use strict"
var invoice = {
  value: 100,
  process: function() {
    return () => console.log(this.value);
  }
};
var newInvoice = {
  value:200
};
invoice.process().bind(newInvoice)();
invoice.process.bind(newInvoice)()();
invoice.process().call(newInvoice) // no effect or arrow function

// rest and spread operator.

//Example


// Object literals
var price= 100;
var obj= {
    price,
    getValue() {
        return this.price
    }
}
console.log(obj.getValue());

// For of loop
let arr = ["Software", "hardware"];
for(let val of arr) {
    console.log(val);
}

for(let val in arr) {
    console.log(val);
}
let str= "Hello World";
for(c of str){
  console.log(c);
}

// Octal and binary literal
let octal= 0o10;  // [0-7]  1*8^1+0*8^1
console.log(octal);
let binary = 0b10;
console.log(binary);

// Template Literals
let invoiceValue = 1000;
let str = `total invoice value is : ${invoiceValue}`;
console.log(str);

// Destructuring
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

// ================================== Class 

class Task {

}
console.log(typeof Task);

let task = new Task();
console.log(typeof task);
////////
class Task {
    constructor(){
        console.log("i am constructor Task ");
    }
    showId() {
        console.log("99");
    }
}

let task = new Task();
task.showId();
console.log(task);
console.log(task.showId === Task.prototype.showId);

// Extends  and super
inheritence as constructor function
function Shape() {
    this.height=100;
    this.width=100;
}
function Rectangle() {
    Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.Area = function(){
    console.log(this.width*this.height);
}
Shape.prototype.showHeight = function(){
    console.log(this.height);
}

let rect= new Rectangle();

// ES6 inhertence
class Task {
    constructor() {
        console.log("Constructor in parent class");
    }
}
class Child extends Task{}

let child= new Child();

// local property
class Task {
    constructor() {
        let taskId = 100
        console.log("Constructor in parent class"+ taskId);
    }
    showId() {
        console.log(`task id is ${this.taskId}`);
    }
}
class Child extends Task{
    constructor() {
        super();
    }
}

let child= new Child();
let task = new Task();
// Static
class Task {
    static getId() {
        return 100;
    }
}
console.log(Task.getId()); // 100
var task = new Task();
task.getId(); // error  task.getId is not a function

// can't have static variables
class Task {
    static let id =100;
}
console.log(Task.id); // unexpected identifier

class Task {
    // static let id =100; error
}
Task.id= 100 // can define rpoperty like this
console.log(Task.id); // 100

// new.target

class Task {
    constructor() {
        console.log(new.target);
    }
}
class Child{
    constructor() {
        super();
    }
}
let child = new Child(); // Child constructor output
// Iterator

let ids = [9001, 9002, 9003];
console.log(typeof ids[Symbol.iterator]);

let iter = ids[Symbol.iterator]();
console.log(iter.next());





// Generators =========

function *genFunction() {
    yield 8001;
    yield 8002;
}
let it = genFunction();
console.log(it.next());
console.log(it.next());
console.log(it.next());

// indefinite id generator
function *genFunction() {
    let nextId = 7001;
    while(true)
    yield nextId++;
}
for(let id of genFunction()){
    if(id>7003){
        break;
    }
    console.log(id);
}


// Promise

function doAsync() {
    let p  = new Promise(function(resolve, reject){

        console.log(`in promise code`);
        setTimeout(function(){
            console.log("Resolving ...");
            resolve();
        }, 2000);
    });
    return p;
}
let promise = doAsync();

function doAsync() {
    let p  = new Promise(function(resolve, reject){

        console.log(`in promise code`);
        setTimeout(function(){
            console.log("Rejecting ...");
            reject();
        }, 2000);
    });
    return p;
}
let promise = doAsync();

// reject and resolve code
function doAsync() {
    // return a promise which resolve or reject the request
   
}
let promise = doAsync();

promise.then(function(){
    console.log(`resolved`);
}, 
function(){
    console.log(`reject`);
});


// resolved with return values


function doAsync() {
    // return a promise which resolve or reject the request
    let p  = new Promise(function(resolve, reject){

        console.log(`in promise code`);
        setTimeout(function(){
            console.log("Resolving ...");
            resolve("successfully !!");
        }, 2000);
    });
    return p;
   
}
let promise = doAsync();

promise.then(function(message){
    console.log(`resolved ${message}`);
}, 
function(){
    console.log(`reject`);
});

// Promise chaining
function doAsync() {
    // return a promise which resolve or reject the request
    let p  = new Promise(function(resolve, reject){

        console.log(`in promise code`);
        setTimeout(function(){
            console.log("Resolving ...");
            resolve("successfully !!");
        }, 2000);
    });
    return p;
   
}
let promise = doAsync();

promise.then(function(message){
    console.log(`resolved ${message}`);
    return "chain it";
}, 
function(){
    console.log(`reject`);
}). then(
    function(resolvedMess){
         console.log(`promise  ${resolvedMess}`);
});

// reject can be handled with catch

promise.catch(function() {
    //reject code;
})