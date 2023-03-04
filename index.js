// the get consts and requires
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3100;

//get the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});

//startup the server
app.listen(PORT, () => console.log('Server started on port ' + PORT));



