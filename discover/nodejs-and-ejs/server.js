const express = require("express");
const app = express();

const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const itens = [
        {title: "Java ", message: "I'am Developer "},
        {title: "JavaScript ", message: "I'am Developer "},
        {title: "Python ", message: "I'am Developer "}        
    ];

    res.render("pages/index", {
        languages: itens,
    });
});

app.get("/about", (req, res) => {
    res.render("pages/about");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

