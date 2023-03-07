const mongoose = require("mongoose")

const connectionString = "mongodb+srv://delaplacette:DYIWspcNLepqNU1b@cluster0.0o3cold.mongodb.net/tickethack"

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
    .then(() => console.log("Database Connected"))
    .catch(error => console.log(error))