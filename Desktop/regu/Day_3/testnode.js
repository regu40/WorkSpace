//console.log("hii")
/*
const http = require('http')

http.createServer(function(request,response){
    response.end("node js ex ")
}).listen(8080,function(){
    console.log("hii");
})
*/

const http = require('http')

http.createServer((request,response)=>{
    response.end("node js ex hii")
}).listen(8080,()=>{
    console.log("hii11");
})