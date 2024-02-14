const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config({
    path: "./config.env",
  });
  
const DB = process.env.DATABASE || "mongodb://127.0.0.1/mernstack"

mongoose
    .connect(DB
    )
  .then(() => {
    console.log("connection done");
  })
  .catch((err) => {
    console.log("not connect", err);
  });


  //DATABASE=mongodb+srv://k:MxNazrmoyy0dwLFz@cluster4.rpivqou.mongodb.net/mernstack
