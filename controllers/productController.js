var fs = require("fs");
var path = require("path");
const productService = require("../services/productService");

const getAllProduct = async (req, res) => {
  const { limit, type, searchValue } = req.query;
  const products = await productService.getAllProduct(
    limit || "",
    type,
    searchValue
  );
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.json(product);
};

const createNewProduct = async (req, res) => {
  const { name, price, type } = req.body;

  try {
    const newProduct = {
      name,
      price: price || 0,
      type,
      image: req.file.buffer,
    };
    await productService.createNewProduct(newProduct);
    res.status(201).json({});
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  const { name, price, type } = req.body;
  const id = req.params.id;

  try {
    let updatedProduct = {
      name,
      price,
      type,
    };

    await productService.updateProduct(id, updatedProduct);

    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);
    res.json(deletedProduct);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProduct,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
