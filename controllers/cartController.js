var fs = require("fs");
var path = require("path");
const cartService = require("../services/cartService");

const getAllProduct = async (req, res) => {
  const products = await cartService.getAllProduct();
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await cartService.getProductById(req.params.id);
  res.json(product);
};

const createNewProduct = async (req, res) => {
  const { product, quantity } = req.body;

  try {
    const newProduct = {
      product,
      quantity: quantity || 1,
    };
    await cartService.createNewProduct(newProduct);
    res.status(201).json({});
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  const { product, quantity } = req.body;
  const id = req.params.id;

  try {
    let updatedProduct = {
      product,
      quantity,
    };

    await cartService.updateProduct(id, updatedProduct);

    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await cartService.deleteProduct(req.params.id);
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
