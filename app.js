const express = require('express');
const app = express();
app.use(express.static('public'));

function nameFunction(req,res)
{
    res.send('Thomas created a server here!');
}
app.get('/thomas', nameFunction);

app.post('/thomas', (req,res) =>
{
   res.send('Thomas got a post request')
});
app.listen(8000,()=>
{
    console.log('App listening on port 8000');
});