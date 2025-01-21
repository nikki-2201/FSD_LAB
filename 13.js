const data = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];

const [firstPerson] = data;
const { name:n, age } = firstPerson;

console.log(n); 
console.log(age);  
