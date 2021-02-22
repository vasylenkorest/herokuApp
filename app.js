const http = require("http");
const url = require("url");
 
http.createServer(function(req, res){

    if(req.method == 'GET'){
        let urlReq = url.parse(req.url, true);
        console.log('urlReq : ', urlReq.query.key);
        if(urlReq.query.key == '303'){
            res.end('YESS');
        } else {
            res.end('NOOO');
        }
    }
}).listen(3000);