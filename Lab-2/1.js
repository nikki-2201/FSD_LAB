const { colors } = require("./8")

function mergeArrays(...arrays){
    return[].concat(...arrays)
}
let a=mergeArrays([1,2],[3,4],[5,6])
console.log(a)
let [a, b, ...] = colors;
