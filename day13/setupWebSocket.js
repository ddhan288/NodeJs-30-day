const webSocket = require('ws');

function setupWebSocket(server) {
    const wss = new webSocket.Server({server});
    wss.on('connection', (ws) => {
        console.log('client connected');

        ws.on('message', (message) => {
            console.log(`Received message: ${message}`);
            ws.send(`Echo:${message}`);
        });
        ws.on('close', () => {
            console.log('client disconnect');
        })
    })
}
module.exports = setupWebSocket;