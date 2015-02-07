var through = require('through');
var split = require("split");
var counter =10;
var value;

function alternate(){
    
    if(counter===11){
        return function(buffer){
            value = buffer.toString().toLowerCase() + "\n";
            counter=10;
            this.queue(value);
        };
    }else if(counter===10){
        return function(buffer){
            value = buffer.toString().toUpperCase() + "\n";
            counter=11;
            this.queue(value);
        };
    }
}

process.stdin.pipe(split()).pipe(through(alternate(), function end(){this.queue(null);})).pipe(process.stdout);
