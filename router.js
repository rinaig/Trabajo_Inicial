const express = require("express");
const router = express.Router();

// Conexión con la base de datos
const connection = require("./database/base");

// ruta envio mail
router.use("/", require("./email/email"));

// GET para traer precios de productos

router.get("/index", (req, res) => {
    let sql = "SELECT producto_precio FROM producto WHERE id = 1";
    let query = connection.query(sql, (err, results) => {
       if (err) throw err;
       res.render("index", {
          precio_grafico: results[0].precio_grafico
       });
    });
 });

 router.get("/index", (req, res) => {
    let sql = "SELECT producto_precio FROM producto WHERE id = 2";
    let query = connection.query(sql, (err, results) => {
       if (err) throw err;
       res.render("index", {
          precio_web: results[0].precio_web
       });
    });
 });

 router.get("/index", (req, res) => {
    let sql = "SELECT producto_precio FROM producto WHERE id = 3";
    let query = connection.query(sql, (err, results) => {
       if (err) throw err;
       res.render("index", {
          precio_app: results[0].precio_app
       });
    });
 });

 

 module.exports = router;