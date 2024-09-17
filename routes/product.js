const express = require("express");
const productController = require("../controller/product");

const router = express.Router();

// Read GET /products
router.get("/products", productController.getAllProducts);

// Read GET /products/:id
router.get("/products/:id", productController.getProducts);

// Create POST /products
router.post("/products", productController.createProducts);

// Update PUT /products/:id
router.put("/products/:id", productController.putProducts);

// Delete DELETE /products/:id
router.delete("/products/:id", productController.deleteProducts);

// Patch PATCH /products/:id
router.patch("/products/:id", productController.patchProducts);

// Home route
router.get("/", (req, res) => {
  res.status(200).send("Welcome to the products API");
});

module.exports = router;
