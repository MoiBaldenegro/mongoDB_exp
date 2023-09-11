const express = require("express");
const gettersRouter = require("./routes/getters");
const dbInit = require("./config/db");


const server = express();

const PORT = 3000;

server.listen(PORT, () =>{
    console.log("server ruunning in port 3000");

});

dbInit();





server.use("/getters", gettersRouter)




server.get("/", (req, res) =>{
    console.log("Todo funca perfecto")
    res.send("FUNCA BIEN")
} );

