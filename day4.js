const path = require ('node:path');
const fs = require ('fs');
function resolvePath(relativePath) {
    const absolutePath = path.resolve (__dirname,relativePath);
    try {
        
        console.log(`output:${absolutePath}`);
        if (!fs.existsSync(absolutePath)) {
            console.log(`Error: ${relativePath} does not exist.`);
        }
    } catch (error){
        console.log("Error ", error.message);
        
    }
}
 
// resolvePath('../project/folder/file.txt');
resolvePath('nonexistent-folder/file.txt');