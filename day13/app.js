const express = require ('express');
const http = require ('http');
const setupWebSocket = require('./setupWebSocket');

const app = express();
const server = http.createServer(app);

setupWebSocket(server);

app.get ('/websocket', (req, res) => {
    res.sendFile(__dirname  + '/websocket.html');

});

const port = process.env.port || 3000;
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});