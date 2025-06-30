const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});
// cloudinary.config({
//   cloud_name: "duxsk0kf8",
//   api_key: "853746536664941",
//   api_secret: "agc62qrAebKs7A1t_iLwrUgKsUA",
// });

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
