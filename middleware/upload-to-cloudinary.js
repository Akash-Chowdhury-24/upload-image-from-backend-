const cloudinary = require("../config/cloudinary-config.js");

const uploadToCloudinary = async(filepath)=>{
  try {
    const result = await cloudinary.uploader.upload(filepath);

    return {
      url : result.secure_url,
      publicId : result.public_id

    }
  } catch (error) {
    console.log("error is uploading image to cloudinary", error);
  }
}

module.exports={uploadToCloudinary};