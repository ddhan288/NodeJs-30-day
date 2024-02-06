const express = require ('express');

const app = express ()

app.get ('/', (req , res) => {
    res.send("hello Deepak")
});

app.get('/about' , (req , res ) => {
    res.send ("this is a about Page");
});

app.get('/contact' , (req , res ) => {
    res.send ("thisss is a contact Page");
});

//Route Parameter
app.get('/courses/:id' , (req , res ) => {
    res.send (req.params.id);
});
const port = process.env.PORT || 3000
app.listen(port , ()=> console.log('server is runing on port 3000'))