const mongoose = require("mongoose");

const DB_URI = "mongodb://localhost:27017/pruebas"


const connect = ()=> {
    mongoose.connect(
        DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    
};

const db = mongoose.connection;

db.on("error", (error) => {
    console.error("Error de conexión a MongoDB:", error);
  });
  
  db.once("open", () => {
    console.log("Conexión exitosa a MongoDB");
   });
  

module.exports = connect;