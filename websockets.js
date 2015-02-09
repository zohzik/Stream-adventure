var websocket = require('websocket-stream');
var stream = websocket("https://localhost:8000");

stream.write("hello\n");
stream.end(); 