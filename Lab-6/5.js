const http = require('http')
const users=require('./users.json')
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>Welcome</h1>');
    }else if(req.url==="/api/data"){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(users))
    }
    else{
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("Invalid")
    }
})
server.listen(3000, () => {
    console.log("Server runs at port 3000");
})