/* 
  The module must  
  export a single function that takes three arguments: the directory name,  
  the filename extension string and a callback function, in that order. The  
  filename extension argument must be the same as what was passed to your  
  program. Don't turn it into a RegExp or prefix with "." or do anything  
  except pass it to your module where you can do what you need to make your  
  filter work.  
*/

// from MDN

/*
var EXPORTED_SYMBOLS = ["foo"];

function foo(myDir, myExtension, myCallback) {
  return "foo";
}

*/

var fs = require('fs')
var path = require('path')
// filtered by the extension of the files. The first argument is the  
// directory name and the second argument is the extension filter
module.exports = function (dir, filterStr, callback) {
// read the dir and handle error
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
