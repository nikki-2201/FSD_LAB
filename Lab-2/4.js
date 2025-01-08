const userDetails = {name: 'CVR', age: 25} 
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'} 
const userPreferences = {theme: 'Engineering Edu', language: 'EN'} 
function mergeUserData(userDetails,userAddress,userPreferences){
    const a={...userDetails,...userAddress,...userPreferences}
    return a;
}
const b=mergeUserData(userDetails,userAddress,userPreferences)
console.log(b);