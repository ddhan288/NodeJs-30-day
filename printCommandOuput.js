const { exec } = require ('child_process');


function executeCommand(command) {
    exec ( command, (error, stdout, stderr) => {
        if ( error ){
            console.error(`Error executing the command: ${error.message}`);
            return;
        }
        else if ( stderr){
            console.error(`Command stderr: ${stderr}`);
            return;
        }

        console.log(`Command output:\n ${stdout}`);
    })
}
executeCommand('open Google Chrome');    