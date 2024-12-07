const multer = require("multer");
const path = require("path");

// create a multer storage 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname+"-" + Date.now() + path.extname(file.originalname));
  },
});

// create the filter 

const fileFilter = (req, file, cb) => {
  if(file.mimetype.startsWith("image/")){
    cb(null, true);
  }else{
    cb(new Error("file is not and image"), false);
  }
};


// multer middleware
const multerMiddleware = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits:{
    fileSize: 1024*1024*5 // 5MB
  },
});

module.exports = multerMiddleware;