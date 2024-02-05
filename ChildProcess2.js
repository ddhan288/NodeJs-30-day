const cp = require ('child_process')
async function executeCommand (command){
    
    
    try {
        const output = cp.execSync(` ${command}`);
        console.log(output.toString());
    } catch (error){
        console.log("Error ", error.message);
    }
}       

// 
// Expected Output: (output of ls -la)
executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!

executeCommand("open Google Chrome");