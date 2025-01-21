const person={
    name:"Nikhitha",
    age:19,
    greet(){
        console.log(`Hello ${this.name} your age is ${this.age}`);
    },
    isAdult(){
        if(this.age>=18){
            console.log(`${this.name} is an adult`)
        }
        else{
            console.log(`${this.name} is not an adult`)
        }
    }
}
person.greet();
person.isAdult();