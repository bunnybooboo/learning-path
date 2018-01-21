var net = require('net');

var server = net.createServer(function(socket) {
  socket.write('hello\n');  
  socket.write('world\n');
  
  socket.on('data', function(data) {
    socket.write(data);
  })
});

server.listen(8000);

/*
server.listen({
  host: 'localhost',
  port: 8000
  exclusive: true
});
*/
