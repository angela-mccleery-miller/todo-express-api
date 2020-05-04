require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const port = process.env.PORT || 4000;
const app = express();

const todoRoutes = require("./routes/todoRoutes")

mongoose.connect(
    "mongodb://localhost:27017/todo-db", 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    (err) => {
        if(err) {
        console.log("Error connecting to db: ", + err);
    } else {
        console.log("Connected to db");
    }
   }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STARTING POINT TO TELL IT WHERE TO FIND APPS
app.use("/", todoRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});