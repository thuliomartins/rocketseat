const express = require("express");
const app = express();

const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/index");
});

app.get("/about", (req, res) => {
    res.render("pages/about");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

