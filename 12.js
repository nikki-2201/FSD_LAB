function createProfile({name,email}){
    return {name,email};

}
const person={
    name:"John",
    age:30,
    email:"nikhitharachapally@gmail.com",
    address:{
        street:"123 Main St",
        city:"Anytown",
        state:"CA",
    }
};
const s=createProfile(person);
console.log(s)