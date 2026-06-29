const dotenv = require("dotenv");
dotenv.config();
const express = require ("express");
const app = express();
const route = require("./routes/index");
const dbConnect = require("./configuration/dbConfig")
app.use(express.json());
dbConnect();

app.use(route);

app.listen (process.env.PORT, (req, res) => {
    console.log(`Server running on port ${process.env.PORT}`);
});

