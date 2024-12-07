const express = require("express");
const { uploadImage } = require("../controllers/image-controller");
const multerMiddleware = require("../middleware/multer-middleware.js");
const router = express.Router();


router.post("/upload", multerMiddleware.single("image"),uploadImage);

module.exports = router;