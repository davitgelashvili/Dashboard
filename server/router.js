const express = require("express");
const mainRouter = express.Router();

const carsRouter = require("./allRouter/CarsRouter.js");
const uploadRouter = require("./allRouter/uploadPhotoRouter.js");

mainRouter.get('/', (req, res) => {
    res.json({ message: 'გამარჯობა Frontend-იდან!' });
});

// როუტერის გამოყენება
mainRouter.use("/cars", carsRouter);
mainRouter.use("/upload", uploadRouter);

module.exports = mainRouter;