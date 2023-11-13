const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "index.html"));
    //res.send(`${path.join(__dirname, "public", "index.html")}`+"---------"+`${__dirname}`);
})


app.listen(PORT);