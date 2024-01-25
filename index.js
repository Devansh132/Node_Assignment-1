const http = require('http');
http.createServer((req,resp)=>{
   resp.writeHead(200,{'Content-Type':'application\json'});
   resp.write(JSON.stringify({Name:'Devansh Shukla',Message:'Hello World!'}));
   resp.end();
}).listen(4300);