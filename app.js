const express = require('express');
const hbs = require ('hbs');

require ('dotenv').config();

const app = express();
const PORT = process.env.PORT;
 

app.set( 'view engine', 'hbs')
app.use(express.static('public'))

app.get('/',  (req, res) => {
  res.render('index');
});
 
app.get('*', function (req, res) {
    res.send('Estamos Trabajando para Finalizar la Web')
})

// app.use("/", require("./router"));

app.listen(5000)



