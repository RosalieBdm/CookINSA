const mongoose = require("mongoose");

mongoose
    .connect(
       "mongodb+srv://SB-Test:test@cluster0.xqkxz.mongodb.net/mern-project",
        // "mongodb://localhost:27017",
        // "http://localhost:3000",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to MongoDB>>> "))
    .catch((err) => console.log("Failed to connect to MongoDB >>> ", err));

console.log ("finito")