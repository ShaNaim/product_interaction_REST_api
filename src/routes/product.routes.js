const { Router } = require("express");
const productController = require("../controller/product.controller");
const productRouter = Router();

productRouter.get("/", productController.productTest); // get All Product List

productRouter.post("/", productController.createNewProduct); // Create New Product

productRouter.get("/:id", productController.productTest); // get specific Product

productRouter.put("/:id", productController.productTest); // update product

productRouter.delete("/:id", productController.productTest); // delete product

module.exports = productRouter;
