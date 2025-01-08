const colors = ['red', 'green', 'blue', 'yellow'] 
let [a,b,...rest]=colors;
console.log(a,b)
let [,d,,e]=colors;
console.log(d,e)
