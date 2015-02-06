var tr = require("through");



process.stdin.pipe(tr(function write(buf){
    this.queue(buf.toString().toUpperCase());
}, function end(){
    this.queue(null);
})).pipe(process.stdout);