const mongoose=require("mongoose");

const Connect=()=>{
    return mongoose.connect("mongodb+srv://debasish:debasish1122@cluster0.t6x6r36.mongodb.net/?retryWrites=true&w=majority");
};

module.exports=Connect;