let http = require('http');
let url = require('url');
let server = http.createServer((req,res) =>{
    let parseUrl = url.parse(req.url,true);
    let queryStringObject = parseUrl.query ;
    res.end('Hello NodeJs');
    console.log(queryStringObject);
});
server.listen(3000,()=>{
    console.log('The server is listening on port 3000!');
})