function createProfile({ name, age, interests }) {
    const [primaryInterest, secondaryInterest] = interests;
    
    return {
      name,age,primaryInterest,secondaryInterest
    };
  }
  
 
  const profile = createProfile({
    name: 'Nikki',
    age: 19,
    interests: ['Reading', 'Traveling', 'Cooking']
  });
  
  console.log(profile);
  
  