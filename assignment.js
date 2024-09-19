// Creating an object with key-value pairs
const person = {
    name: 'John',
    age: 30,
    profession: 'Engineer'
  };


  // 1st way: Dot notation
console.log(person.name); 

// 2nd way: Bracket notation
console.log(person['age']); 


// Modifying a property value
person.age = 31;
console.log(person.age); 

// Adding a new property
person.country = 'USA';
console.log(person.country); 

//deleting 
delete person.profession;
console.log(person.profession); 

// Object destructuring to extract properties into variables
const { name, age } = person;
console.log(name); 
console.log(age);  

// You can also provide default values and rename the variables
const { country: nation = 'Unknown', profession = 'Unemployed' } = person;
console.log(nation);    
console.log(profession); 


//classes

class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    startEngine() {
      return `${this.brand} ${this.model}'s engine started!`;
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla');
  console.log(myCar.brand);  
  console.log(myCar.model); 
  console.log(myCar.startEngine()); 


  //array
  const mixedArray = [42, 'Hello', true, { name: 'John' }, [1, 2, 3]];

  console.log(mixedArray[1]);  
console.log(mixedArray[3].name);

mixedArray[0] = 100;
console.log(mixedArray[0]);

delete mixedArray[2];
console.log(mixedArray); 


mixedArray.reverse();
console.log(mixedArray);


const lastElement = mixedArray.pop();
console.log(lastElement); 
console.log(mixedArray)



const firstElement = mixedArray.shift();
console.log(firstElement);  
console.log(mixedArray);

const numbers = [10, 20, 30, 40];
const [first, second, ...rest] = numbers;

console.log(first);   
console.log(second);  
console.log(rest); 


const greeting = 'Hello';

for (let letter of greeting) {
  console.log(letter);  
}


const fruits = ['Apple', 'Banana', 'Mango'];

for (let fruit of fruits) {
  console.log(fruit);  
}