const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send({'message':'Welcome to my application!'})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);

