/* print a list of files in a given directory
filtered by the extension
directory name as first argument
file extension second
will not come prefixed with a '.'.
one file per line
must use asynchronous I/O.
*/

/*
 The fs.readdir() method takes a pathname as its first argument and a
 callback as its second. The callback signature is:

    function callback (err, list) { /* ... */ }
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
