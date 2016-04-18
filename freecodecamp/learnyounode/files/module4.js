var fs = require('fs');

function myNewlines(error, data) {
  if (error) return console.error(error)
  else {
    console.log(data.toString().split('\n').length - 1);
  }
}
fs.readFile((process.argv[2]), myNewlines)

/*
** this one is their answer but was not clear to me
var fs = require('fs');
var myFile = process.argv[2];

myResult = fs.readFile(myFile, function(err, data) {
  console.log(data.toString().split('\n').length - 1);
});

** where as this from https://github.com/maxogden/art-of-node#callbacks did

var fs = require('fs')
function finishedReading(error, movieData) {
  if (error) return console.error(error)
  // do something with the movieData
}
fs.readFile('movie.mp4', finishedReading)
*/
