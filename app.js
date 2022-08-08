const express = require('express');
const app = express();
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/about',(req,res) => res.sendFile(path.join(__dirname,'views','about.html')));


app.listen(port, () => console.log(`servidor levanatado con exito en http://localhost:${port}`));