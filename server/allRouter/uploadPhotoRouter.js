// routes/upload.js
const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const uploadRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

cloudinary.config({
  cloud_name: 'dft1egjgt',
  api_key: '842661757579427',
  api_secret: 'NQ9BmnpHs3fNUotzjws5RenQ97I'
});

uploadRouter.post('/image', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path); // დროებითი ფაილის წაშლა
    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

module.exports = uploadRouter;
