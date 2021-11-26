const express = require("express");
const nodemailer = require("nodemailer");
const email = express.Router();

// Envio de email
email.post("/enviar_mail", function (req, res) {
   const nombre = req.body.nombre;
   const apellido = req.body.apellido;
   const cuit = req.body.cuit;
   const celular = req.body.celular;
   const email = req.body.email;
   const cons_producto = req.body.cons_producto;
   const comentarios = req.body.comentarios;

   const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'jaden.schiller6@ethereal.email',
          pass: '	3rK7ty4mCu3z4Uktny'
      }
   });

   const envioEmail = {
      form: email,
      to: "goodduckweb@gmail.com",
      subject: "Contacto",
      html: `Consulta de <strong>${nombre} ${apellido}</strong> <br>
      Celular: <strong>${cuit}</strong> <br> Email: <strong>${celular}</strong> <br> 
      Ciudad: <strong>${email}</strong>,  Pais: <strong>${cons_producto}</strong> <br> 
      Mensaje: <strong>${comentarios}</strong>`
   };

   transporter.sendMail(envioEmail, (err, info)=>{
      if(err) {
         res.status(500).send(err.message);
      } else {
         console.log("El Mail fue enviado");
         res.render("Hemos recibido su mensaje");
      }
   }) 

});

module.exports = email;