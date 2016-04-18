var fs = require('fs');

var myFile = fs.readFileSync(process.argv[2])

myString = myFile.toString();

myLines = myString.split("\n").length;

console.log(myLines -1);

/*
read a file - require('fs') and .readFileSync()

print the number of newlines (\n) it contains to the console

The full path to the file to read will be provided as the first
command-line argument (i.e., process.argv[2]). You do not need to make
your own test file.

This reads into a buffer

and when the buffer is converted "toString()" it reads the whole file!
.split("\n") - then splits the file by the delimiter "\n"
.length - by rights should be the number of lines??
-1?? as the last line does not have a "\n"
*/
