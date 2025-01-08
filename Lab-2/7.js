let person = {name: 'Alice', address: {street: '123 Main St',  
    city: 'Los Angeles', zip: '90001'}, age: 25}; 
    let {name:n,address:{street,city,zip},age}=person;
    console.log(`${n} belongs to ${city}`)