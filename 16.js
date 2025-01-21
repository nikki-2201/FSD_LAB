
const symbol1 = Symbol('uniqueSymbol');
const symbol2 = Symbol('uniqueSymbol');


const obj = {
  [symbol1]: '1st symbol value',
  [symbol2]: '2nd symbol value',
};

console.log(obj[symbol1]); 
console.log(obj[symbol2]); 


console.log(symbol1 === symbol2); 
