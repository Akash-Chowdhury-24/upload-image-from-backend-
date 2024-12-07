const Image = require("../models/image-model.js");
const { uploadToCloudinary } = require("../middleware/upload-to-cloudinary.js");
const fs = require("fs");
const uploadImage = async (req, res) => {
  try {
    if(!req.file){
      return res.status(400).json({
        success : false,
        message : "image is required"
      });
    }

    const {url,publicId} = await uploadToCloudinary(req.file.path);

    const newImage = await Image.create({
      url,
      publicId
    });

    if(!newImage){
      return res.status(500).json({
        success : false,
        message : "image is not uploaded to cloudinary, server error"
      });
    }
    
    res.status(200).json({
      success : true,
      message : "image uploaded successfully",
      data : newImage
    });


    fs.unlinkSync(req.file.path); // so that the image is not stored in the local storage



  } catch (error) {
    console.log(error);
    res.status(500).json({
      success : false,
      message : "internal server error"
    });
  }
};

module.exports = { uploadImage };