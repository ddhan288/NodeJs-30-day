const express = require ('express');

const app = express ();

function greetHandler (req , res ){
    
    const name = req.query.name;
    if (name){
        res.send(`Hello, ${name} !`);
    }else {
        res.send ('Hello, Guest !');
    }
    
    
}
app.get ('/greet', greetHandler);
const port = process.env.PORT || 3000
app.listen(port , ()=> console.log('server is runing on port 3000'))