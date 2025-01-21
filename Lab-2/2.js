function calculateTotal(...a){
    let sum=0;
    for(let i of a){
        sum=sum+i;
       
    }
    return sum;
}
console.log(calculateTotal(10,20,30,40))