const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middlewares/uploadFile");

//route GET /api/product
router.get("/", productController.getAllProduct);

//route POST /api/product
router.post("/", upload.single("image"), productController.createNewProduct);

//route GET /api/product/id
router.get("/:id", productController.getProductById);

//route PUT /api/product/id
router.put("/:id", productController.updateProduct);

//route GET /api/product/id
router.delete("/:id", productController.deleteProduct);

module.exports = router;
