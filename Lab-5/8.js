const os=require('os');
function MemoryInfo(){
    console.log("hostName :",os.hostname());
    console.log("platform:",os.platform());
    console.log("uptime:",os.uptime());
    console.log(`Total Memory: ${os.totalmem()} `)
    console.log(`Free Memory: ${os.freemem()} `)
}
MemoryInfo();