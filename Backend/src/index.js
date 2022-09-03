const express = require("express");
const cors=require("cors")
const connect = require("./config/db");
require("dotenv").config();
const app = express();



app.use(express.json());
app.use(cors());

const userController = require("./controller/usercontroller");
const posterController=require("./controller/postercontroller");
const songsController=require("./controller/songcontroller")
const artistController=require("./controller/artist.controller")

app.use("/api/v1/user",userController);
app.use("/api/v1/poster",posterController);
app.use("/api/v1/songs",songsController);
app.use("/api/v1/artist",artistController);


const PORT=process.env.PORT || 3000
app.listen (PORT, async function(){
    await connect ();
    console.log(`Listening in port  ${PORT}`);
})

