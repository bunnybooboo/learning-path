var fs = require('fs');

function myNewlines(error, data) {
  if (error) return console.error(error)
  else {
    console.log(data.toString().split('\n').length - 1);
  }
}
fs.readdir((process.argv[2]), myNewlines)

prints a list of files in a given directory
filtered by the extension of the files
directory name as the first argument
file extension to filter by as the second argument.

the first arguments of your program are not the first
values of the process.argv array, as the first two values are reserved for
system info by Node.

list of files should be printed to the console
one file per line
You must use asynchronous I/O.

 ─────────────────────────────────────────────────────────────────────────────

 ## HINTS

  The fs.readdir() method takes a pathname as its first argument and a
  callback as its second. The callback signature is:

     function callback (err, list) { /* ... */ }

  where list is an array of filename strings.

  Documentation on the fs module can be found by pointing your browser here:
  file:///home/david/.nvm/versions/node/v7.9.0/lib/node_modules/learnyounode
  /node_apidoc/fs.html

  You may also find node's path module helpful, particularly the extname
  method.

  Documentation on the path module can be found by pointing your browser
  here:
  file:///home/david/.nvm/versions/node/v7.9.0/lib/node_modules/learnyounode
  /node_apidoc/path.html
