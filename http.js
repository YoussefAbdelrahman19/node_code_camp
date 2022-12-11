const http = require('http'); 
const server = http.createServer(function(req,res){
if (req.url === '/'){
    res.end('Welcome to home page ');
}
if (req.url === '/about'){
    res.end(`Welcome to about page `);
}
res.end(`
<h1>Ooops </h1>
<p>Go to home page</p>
<a href="/">Home Page</a>
`)   

});
server.listen(3000);