const express = require('express')
const  hbs = require('hbs');
require('dotenv').config(); //cargar variables de entorno

const app = express()
const port = process.env.PORT;//cambiar para saber el puerto donde se despliega la habitación

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estático 
app.use( express.static('public') );

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Jesus Garcia Moreno',
        titulo: 'Curso de node'
    });
    
})

app.get('*', function (req, res) {
    res.send('Hola mundo');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})