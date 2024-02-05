// child process is a module used to create sub process within a script 
//you can perform different tasks with your scripts jusy by using some methods 

const cp = require('child_process');

function openLinkInChrome(url) {
    const browser = 'Google Chrome';

    try {
        cp.execSync(`open -a "${browser}" ${url}`);
        console.log("Link opened successfully in Chrome");
    } catch (error) {
        console.log("Error opening link:", error.message);
    }
}

module.exports = openLinkInChrome;
