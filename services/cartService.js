const CartModel = require("../models/CartModel");

const getAllProduct = async () => {
  const products = await CartModel.find().populate("product");
  return products;
};

const getProductById = async (id) => {
  const products = await CartModel.findById(id);
  return products;
};

const createNewProduct = async (productData) => {
  try {
    const newProduct = await new CartModel(productData);
    await newProduct.save();
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id, productData) => {
  try {
    await CartModel.findOneAndUpdate({ _id: id }, productData, {
      new: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    await CartModel.findOneAndDelete({
      _id: id,
    });
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
