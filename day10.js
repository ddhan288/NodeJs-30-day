// Problem Statement: Create an Express application that serves static files (e.g., HTML, CSS, images)
//  from a "public" directory.
//  Ensure that accessing the root ("/") returns the "index.html" file from the "public" directory.
const express = require ('express');
const app = express ();
const path = require('path')
const fs = require('node:fs')


function staticFileServer(req, res) {
    try {
        if (req.url === '/') {
            const indexPath = path.join(__dirname, 'public/', 'index.html');
            const indexContent = fs.readFileSync(indexPath, 'utf8');
            res.send(indexContent);
        }else {
            const fileName = path.basename(req.url);

            const requestedFile = path.join(__dirname,req.url, );

            if(fs.existsSync(requestedFile)) {
                const fileContent = fs.readFileSync(requestedFile);
                res.send(fileContent);
            }else {
                res.status(404).send('file not found');
            }
        }

    }catch (error) {
        res.status(500).send('internal server error');
    }
    
}
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('*', staticFileServer);



const port = process.env.PORT || 3000
app.listen (port, () => console.log(`server running on port ${port}`));