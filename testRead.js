const fs = require('fs');

var file = "customPics.txt";
var myfd;
var fileContents;
var imageArray;
var counter = 0;

myfd = fs.openSync(file, 'r');

fileContents = fs.readFileSync(file, 'utf8');

// For testing readFileSync
//console.log(fileContents);

imageArray = fileContents.split('\n');

while(counter < imageArray.length){
    console.log(imageArray[counter]);
    counter++;
}

fs.closeSync(myfd);