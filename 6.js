
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.describe = function() {
      return `Name: ${this.name}, Age: ${this.age}`;
    };
  }
  

  function Student(name, age, grade) {
    Person.call(this, name, age); 
    this.grade = grade;
    this.study = function() {
      return `${this.name} is studying for grade ${this.grade}.`;
    };
  }
  

  const person = new Person("John", 30);
  console.log(person.describe()); 
  

  const student = new Student("John", 30, "A");
  console.log(student.describe()); 
  console.log(student.study());   