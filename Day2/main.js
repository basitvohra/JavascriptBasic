//TODO
function Person(name) {
    this.name = name;
    this.hi= "Hi";
    this.greetings = function() {
        console.log(this.name);
    }
}

var obj1 = new Person("Chris");
console.log("obj1.greet " + obj1.greet);
// console.log(obj1);
Person.prototype.greet = "Hello World!!";
var obj2 = new Person("John");






