function createProfile(student){
    const {name, email} = student;

    return {name, email};
}

const student = {
    name: 'Nikhitha',
    age: 19,
    email:'nikhitharachapally@gmail.com',
    address:'Hyderabad',
}

let a=createProfile(student)
console.log(a)