//cache and timestamp
var http = require('http');
var path = require('path');
var fs = require('fs');
var mimeTypes = {
  '.js' : 'text/javascript',
  '.html' : 'text/html',
  '.css' : 'text/css'
};

var cache = {};
function cacheAndDeliver(f, cb) {
  if (!cache[f]) {
    fs.readFile(f, function(err, data) {
      if (!err) {
        cache[f] = {content: data, timestamp: Date.now()} ; //store a unix timestamp
      }
      cb(err, data);
    });
    return;
  }
  console.log('loading ' + f + ' from cache');
  cb(null, cache[f].content);
}

//requires variables, mimeType object...
http.createServer(function (request, response) {
  var lookup = path.basename(decodeURI(request.url)) || 'index.html';
  var f = 'content/' + lookup;
  fs.exists(f, function (exists) {
    if (exists) {
      cacheAndDeliver(f, function (err, data) {
        if (err) {
          response.writeHead(500);
          response.end('Server Error!');
          return; }
        var headers = {'Content-type': mimeTypes[path.extname(f)]};
        response.writeHead(200, headers);
        response.end(data);
      });
    return;
    if (request.url === '/favicon.ico') {
      console.log('Not found: ' + f);
      response.writeHead(404)
      response.end();
      return;
    }
    return;
  }
  response.writeHead(404); //no such file found!
  response.end();
 });
}).listen(8080);
