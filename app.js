const express = require("express");
const app = express();


const path = require('path')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', '/index.html'));
})
app.use(express.static("./public"))

const url = `http://127.0.0.1:8000`;
app.listen(8000, () => {
    console.log(`Available on: ` + url);
})