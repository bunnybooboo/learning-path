/* print a list of files in a given directory
filtered by the extension
directory name as first argument
file extension second
will not come prefixed with a '.'.
one file per line
must use asynchronous I/O.
*/
// function fs.readdir (myDir, myList)
/*
var fs = require('fs');

fs.readdir('/home/david/Documents/learning-path/freecodcamp/learnyounode/', function (err, files) {
  if (err) console.log(err);;
  console.log(files);
});
*/
// I had to ask for the answer :(
// import modules
var fs= require ('fs');
var path= require('path');
// rename for brevity
var file= process.argv[2];
var extn="."+ process.argv[3];
// position 0 is fs, 1 is the function readdir
// 2 and 3 are the arguments (file & extension)
fs.readdir(file, function (err, list) {
  if (err)
  {
  	throw err;
  }
// for each file
 list.forEach(function(files){
   // if files extension name is the same as extn
    if(path.extname(files) === extn){
      console.log(files);
    }
  });
});

/*
 The fs.readdir() method takes a pathname as its first argument and a
 callback as its second. The callback signature is:

    function callback (err, list) { /* ... */ //}
/*
 where list is an array of filename strings.

 Documentation on the fs module can be found by pointing your browser here:
 file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html

 You may also find nodes path module helpful, particularly the extname
 method.

 Documentation on the path module can be found by pointing your browser
 here:
 file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html
*/
