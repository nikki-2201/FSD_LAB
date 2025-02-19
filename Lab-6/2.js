const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("This is main")
        res.end()
    }
    else if(req.url=='/about'){
        res.write("About")
        res.end()
    }
    else if(req.url=='/contact'){
        res.write("Contact")
        res.end()


    }
    else{
        res.write("No content")
        res.end()
    }
})
server.listen(3000,()=>{console.log("Server Started")})


