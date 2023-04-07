require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on("error",(error) => console.error(error))
db.once("open", () => console.log("Connected to database"))


app.use(express.json())

app.get('/', (req,res) => {
    res.send("<h1>SpaceX API</h1>");
})


const planetsRouter = require("./routers/planets")
app.use("/planets",planetsRouter)

const starsRouter = require("./routers/stars")
app.use("/stars",starsRouter)

app.listen(PORT, () => console.log("Server started"));
