const fs=require('fs')
const readStream=fs.createReadStream('input.txt','utf-8')
const writeStream=fs.createWriteStream('output.txt','utf-8')
readStream.pipe(writeStream)
writeStream.on('finish',(data,err)=>{
    if(!err){
        
        console.log('File copied successfully')
       
        
    }
    else{
        console.log("Error")
    }

})
readStream.on('error',(err)=>{
    console.log("Error")
})