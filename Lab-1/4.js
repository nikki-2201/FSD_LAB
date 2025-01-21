function Student(name, grade) {
    this.name = name;
    this.grade = grade;
  
    this.study = function () {
      console.log(`${this.name} is studying.`);
    };
  
    this.getGrade = function () {
      return `${this.name}'s grade is: ${this.grade}`;
    };
}
  
const student1 = new Student("Cherry", "S");
const student2 = new Student("Preethi", "A+");
student1.study();
console.log(student1.getGrade());

student2.study();
console.log(student2.getGrade());
  

  
  

  