const os=require('os')
const uptime=os.uptime();
const days=Math.floor(uptime/(24*3600));
const hours=Math.floor((uptime%86400)/3600);
const minutes=Math.floor((uptime%3600)/60);
const seconds=Math.floor(uptime%60);
console.log(uptime)
console.log(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds `);
    

