const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end("welcome, you can do it");
    }

    else if(req.url === '/about')
    {
        res.end("you are on about page");
    }

    else {
        res.end(`
    <h1>Oops!</h1>
    <p>You are on wrong page</p>
    <a href="/" >Back home</a>
    `);
    }
})

server.listen(5000);

//npm enables us to reuse our own code in another project
//use code written by another developer
//lastly share our own solutions with other developers as well

//npm project is hosted at npmjs.com
//package:reusable code, It is essentially a folder that contains js code
//there is no qaulity control in npm registry
//we need package json becuase we need to provide infrmation about our project
