const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: {
    type : String,
    required : [true,"image url is required"],
  },
  publicId : {
    type : String,
    required : [true,"publicId is required"],
  }
});

const Image = mongoose.models.Image || mongoose.model("Image", imageSchema);

module.exports = Image;