const fs = require('fs');

var file = "customPics.txt";

var myfd = fs.openSync(file, 'a');

fs.appendFileSync(file, "nonsense");
console.log("The contents of the file is ");
console.log(fs.readFileSync(file, 'utf8'));

fs.closeSync(myfd);
