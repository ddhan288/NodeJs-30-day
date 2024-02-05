const cp = require ('child_process');

async function executeCommand (command) {
    try {
        const commandOuput = await executeCommand(command);
        console.log(commandOuput);
    }catch (error) {
        console.log(error.toString());
    }

}

executeCommand();