const { productValidator } = require("../utils/validator");
const { productMaper } = require("../utils/mapper");

const { responseHandler } = require("../utils/handler");

const Product = require("../database/dal/product.dal");

module.exports.productTest = async (req, res) => {
	res.status(200).json({
		error: false,
		success: true,
		data: "OK",
	});
};

module.exports.createNewProduct = async (req, res) => {
	try {
		if (!productValidator.validatePoductInputRequiements(req.body))
			return res.status(400).json(responseHandler.handleErrorResponse("Failed to validate"));

		const product = productMaper.toPoductInput(req.body);

		const inputsValidateError = productValidator.validateProductInputTypes(product);

		if (inputsValidateError.length !== 0)
			return res.status(400).json(responseHandler.handleErrorResponse(inputsValidateError));

		const newProduct = await Product.createProduct(product);
		if (!newProduct)
			return res.status(500).json(responseHandler.handleErrorResponse("Something Went Wrong"));

		const responseProduct = productMaper.toProductOutput(product);

		return res.status(200).json(responseHandler.handleSuccessResponse(responseProduct));
	} catch (error) {
		console.log(error);
		res.status(500).json(responseHandler.handleErrorResponse("Something Went Wrong"));
	}
};
