var http = require('http');
var path = require('path');
var fs = require('fs');
var mimeTypes = {
  '.js' : 'text/javascript',
  '.html' : 'text/html',
  '.css' : 'text/css'
};

//requires variables, mimeType object...
http.createServer(function (request, response) {
  var lookup = path.basename(decodeURI(request.url)) || 'index.html';
  var f = 'content/' + lookup;
  fs.exists(f, function (exists) {
    if (exists) {
      fs.readFile(f, function (err, data) {
        if (err) {reponse.writeHead(500); reponse.end('Server Error!'); return; }
        var headers = {'Content-type': mimeTypes[path.extname (lookup)]};
        response.writeHead(200, headers);
        response.end(data);
      });
    return;
  }
  response.writeHead(404); //no such file found!
  response.end();
 });
}).listen(8080);
