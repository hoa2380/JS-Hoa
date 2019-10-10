const numbers = [1,2,3,4,5];
[num1,num2] = numbers;
console.log(num1, num2);

const person = {
    name: "Teo",
    age: 12
};

const{ name, age } = person;
console.log(name + " - " + age);

const person2 = person;
person.name = "Ti";
person.age = "10"

console.log(person);
console.log(person2);
