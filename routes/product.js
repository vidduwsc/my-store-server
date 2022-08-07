const express = require("express");
const router = express.Router();
const multer = require("multer");

const { findOneAndDelete, findOneAndUpdate } = require("../models/Product");
const Product = require("../models/Product");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

//route GET /api/product
router.get("/", async (req, res) => {
  const posts = await Product.find();
  res.json(posts);
});

//route POST /api/product
router.post("/", upload.single("image"), async (req, res) => {
  const { name, price, type } = req.body;

  try {
    const newProduct = new Product({
      name,
      price: price || 0,
      type,
      image: `uploads/${req.file.filename}`,
    });
    await newProduct.save();
    res
      .status(201)
      .json({ name, price, type, image: `uploads/${req.file.filename}` });
  } catch (error) {
    console.log(error);
  }
});

//route GET /api/product/id
router.get("/:id", async (req, res) => {
  const post = await Product.findById(req.params.id);
  res.json(post);
});

//route PUT /api/product/id
router.put("/:id", async (req, res) => {
  const { name, price, type, image } = req.body;

  try {
    let updatedProduct = {
      name,
      price,
      type,
      image,
    };

    updatedProduct = await Product.findOneAndUpdate(
      { _id: req.params.id },
      updatedProduct,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
  }
});

//route GET /api/product/id
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({
      _id: req.params.id,
    });
    res.json(deletedProduct);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
