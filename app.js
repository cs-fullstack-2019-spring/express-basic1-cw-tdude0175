const express = require('express');
const app = express();
app.use(express.static('public'));

function nameFunction(req,res)
{
    // if a get request is sent to the /thomas route it will send back this response
    res.send('Thomas created a server here!');
}
// makes a route for the get request.
app.get('/thomas', nameFunction);

// if a post request is sent to /thomas route it will send back this response instead of the get request
app.post('/thomas', (req,res) =>
{
   res.send('Thomas got a post request')
});

// this assigns the server to the port 8000 where 8000 is substitutable for a different port.
app.listen(8000,()=>
{
    console.log('App listening on port 8000');
});