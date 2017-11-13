// const fs = require('fs')

// fs.unlink('/tmp/hello', function(err) {
//   if (err) {
//     return console.log(err)
//   }
//   console.log('successfully deleted /tmp/hello')
// })


// // the sync api
// const fs = require('fs')

// try {
//   fs.unlinkSync('/tmp/hello')
// } catch (ex) {
//   console.log(ex)
// }

// console.log('successfully deleted /tmp/hello');

// // touch.js
// var fs = require('fs');

// fs.writeFile('/tmp/fs.tmp', '', function(err) {
//   if (err) throw err;
// });

//ex 1
// Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile('dirlist.txt', function (err, file) {

  // If an error occurred, throwing it will
  // display the exception and end our app.
  if (err) throw err;
  // logData is a Buffer, convert to string.
  var text = file.toString();

  var array = text.split('\n');
  for (var index = 0; index < array.length; index++){
      var row = array[index];
      
      var columns = row.split(/ +/);
      var filename = columns[8];
      

      if (file === undefined) {
        continue
      }
      console.log(filename)
  }
});