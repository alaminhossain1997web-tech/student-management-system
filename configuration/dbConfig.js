const mongoose = require("mongoose");

const connection =  function dbConnect() {
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("Database connected successfully")
    }).catch((error)=>{
        console.log(`Database connection failed: ${error}`)
    })

}


module.exports = connection;