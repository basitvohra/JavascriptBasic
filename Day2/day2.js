// label 1
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
  };
  // check person property
  // label 2
  const person1 = {
    name: 'Chris',
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  }
  
  const person2 = {
    name: 'Deepti',
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  }
// check for difference on this  
// label 3
function Person(name) {
    this.name = name;
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
  }
  let person1 = new Person('Bob');
  let person2 = new Person('Sarah');
  console.log(person1);
  // other way to create object
  let person1 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  });
  let person2 = Object.create(person1);  
    
  // label 4
  
function Person(first, last, age, gender) {
  
    // property and method definitions
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    
  }
  let person1 = new Person('Bob', 'Smith', 32, 'male');
  let person2 = Object.create(person1);
  console.log(person2.__proto__);
  console.log(person1.constructor);
  // Modification on prototype
  Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
  };
  person1.farewell();
  // add same property as instance on prototype
  Person.prototype.age = 40;
  console.log(person1.age);
  



  