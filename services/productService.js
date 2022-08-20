const ProductModel = require("../models/ProductModel");

const getAllProduct = async (limit, type, searchValue) => {
  const query = {};
  if (type) {
    query.type = type;
  }
  if (searchValue) {
    query.name = { $regex: searchValue, $options: "i" };
  }
  const products = await ProductModel.find(query).limit(limit);
  return products;
};

const getProductById = async (id) => {
  const products = await ProductModel.findById(id);
  return products;
};

const createNewProduct = async (productData) => {
  try {
    const newProduct = await new ProductModel(productData);
    await newProduct.save();
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id, productData) => {
  try {
    await ProductModel.findOneAndUpdate({ _id: id }, productData, {
      new: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    await ProductModel.findOneAndDelete({
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
