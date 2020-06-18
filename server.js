const express = require('express');
const path = require('path');


const app = express();
const config = {
    port: 5000
};


app.use('/pin-login', express.static(path.join(__dirname, 'pin-login')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/dashboard/', function(req, res) {
    res.sendFile(path.join(__dirname, './dashboard.html'));
});

//app.get('/test', function(req, res) {
//res.send('hello world'); });
    
// Start the server
app.listen(config.port, ()=>{
    console.info(`Express listening on port ${config.port}`)
})
    
module.exports = app;