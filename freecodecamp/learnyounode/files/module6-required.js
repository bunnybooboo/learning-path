/* fs.readdir(file, function (err, list) {
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
*/
var fs = require('fs');
var path= require('path');

module.exports = function(err, list) {
  if (err)
  {
  	return callback(err);
  }
// for each file
// list.forEach(function(files){
 list.forEach(function(files){
   // if files extension name is the same as extn
    if(path.extname(files) === extn){
      console.log(files);
    }
  });
};
