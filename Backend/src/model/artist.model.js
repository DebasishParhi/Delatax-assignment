const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    Name: { type: String, require: true, unique: true },
    Dob:{type:Number},
    Bio:{type:String},
    Song:[{type:String}]

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Artist = mongoose.model("artist", artistSchema);
module.exports = Artist;