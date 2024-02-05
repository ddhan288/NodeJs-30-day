const path = require('node:path');
const fs = require('fs');

function checkFileExtension(filePath, expectedExtension) {
    try {
        const fileExists = fs.existsSync(filePath);

        if (!fileExists) {
            console.log(`Error: ${filePath} does not exist.`);
            return;
        }

        const actualExtension = path.extname(filePath);

        if (actualExtension === expectedExtension) {
            console.log(`File has the expected extension: ${actualExtension}`);
        } else {
            console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
        }
    } catch (error) {
        console.log("Error ", error.message);
    }
}


checkFileExtension('./file.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('./file.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png
