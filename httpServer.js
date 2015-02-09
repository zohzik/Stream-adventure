var http = require("http");
var through = require('through');


http.createServer(function(req, res){
    req.pipe(through(function(stream){
        this.queue(stream.toString().toUpperCase());
    })).pipe(res);
    res.end();
}).listen(process.argv[2]);