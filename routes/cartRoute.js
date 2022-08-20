const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

//route GET /api/product
router.get("/", cartController.getAllProduct);

//route POST /api/product
router.post("/", cartController.createNewProduct);

//route GET /api/product/id
router.get("/:id", cartController.getProductById);

//route PUT /api/product/id
router.put("/:id", cartController.updateProduct);

//route GET /api/product/id
router.delete("/:id", cartController.deleteProduct);

module.exports = router;
