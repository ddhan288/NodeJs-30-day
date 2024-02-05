const fs = require('fs');

function ReadFileContent(filePath){
    fs.readFile(filePath, 'utf8', (err,data) => {
        if(err){
            if (err.code === 'ENOENT'){
                console.log(`Error reading file: ${err.message}`);

            }else{
                console.error(`Error reading file:${err.stack}`);
            } 
            }else {
                console.log(`File Content: ${data}`);
                // console.log(data);
        }
    });
}
// ReadFileContent('./file.txt');
// ReadFileContent ( './empty-file.txt');
// ReadFileContent('./nonexistent-file.txt');

module.exports = {
    ReadFileContent : ReadFileContent
}