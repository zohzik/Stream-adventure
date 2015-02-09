var through = require('through');
var split = require("split");
var even = false;

process.stdin.pipe(split()).pipe(through(function(buffer){
    if(!even){
        this.queue(buffer.toString().toLowerCase());
        even = true;
    }else{
        this.queue(buffer.toString().toUpperCase());
        even=false;
    }
    this.queue("\n");
})).pipe(process.stdout);