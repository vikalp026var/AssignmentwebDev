const http=require("http")
const server=http.createServer((req,res)=>{
     if(req.url=='/'){
          res.write("<h1>I am happy to learn Full stack Web Development From Pw Skills!</h1>")
     }
      res.end();
})
server.listen(5000)
console.log("Successfully run on port ");
