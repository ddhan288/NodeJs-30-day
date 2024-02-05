const fs = require ('fs');
const path = require ('path');

function writeToFile (filePath, content ){
    const directory = path.dirname(filePath);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive : true});
    }

    fs.writeFile(filePath, content, (err) => {
        if (err){
            console.error(`Error writing to the file: ${err.message}`);
        }else {
            console.log(`Data sucessfully written onto the ${filePath}`);
        }
    });
}

writeToFile('./output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt
writeToFile('./nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...