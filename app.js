const http = require('http');
const express = require('express')
const app = express()

const port = 8080;

app.set('view engine', 'hbs');

// Servir contenido estatico
app.use( express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "public/index.html");
});
app.get('/generic', (req, res) => {
    res.sendFilen(__dirname + "/public/generic.html");
});
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + "/public/elements.html");
});

app.get('*', (req, res) => {
    res.send('404 | Pagina no encontrada')
});


 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`);
})