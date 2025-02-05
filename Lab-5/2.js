const os=require('os')
function MemInfo(){
    setInterval(()=>{
    const mem = os.freemem();
    const total = os.totalmem();
    const used = (total - mem);
    
    console.log((used/total)*100)
    ;

    const percentage = (mem / total) * 100;
    console.log(percentage);
},5000)
}
MemInfo();
