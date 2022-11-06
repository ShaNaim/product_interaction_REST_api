const _ = require("lodash");

function validateProductInputTypes(product) {
	try {
		let erorList = [];
		if (!_.isString(product.name)) erorList.push(generateError("Product Name", "String"));

		if (!_.isNumber(product.price)) erorList.push(generateError("Product Price", "Number"));

		if (!_.isNumber(product.cost)) erorList.push(generateError("Product Cost", "Number"));

		if (product.description)
			if (!_.isString(product.description))
				erorList.push(generateError("Product Description", "String"));
		if (product.unit) {
			if (!_.isString(product.unit.type))
				erorList.push(generateError("Product Unit Type", "String"));
			if (!_.isNumber(product.unit.value))
				erorList.push(generateError("Product Unit Value", "Number"));
		}

		return erorList;
	} catch (error) {
		console.log("VALIDATOR", error);
	}
}

function validatePoductInputRequiements(product) {
	console.log("HERE");
	if (_.isEmpty(product)) return false;
	console.log("HERE 1");

	if (!("productName" in product)) return false;
	console.log("HERE 2");

	if (_.isEmpty(product.productName)) return false;
	console.log("HERE 3");

	if (!("productPrice" in product)) return false;
	console.log("HERE 4");

	// if (_.isEmpty(product.productPrice)) return false;
	console.log("HERE 5");

	if (!("productCost" in product)) return false;
	console.log("HERE 6");

	// if (_.isEmpty(product.productCost)) return false;
	console.log("HERE 7");

	if ("productImages" in product) {
		if (!_.isArray(product.productImages)) return false;
		console.log("HERE 8");
	}

	console.log(product);
	return true;
}

function generateError(identifier, type) {
	return {
		code: "wrong input",
		message: `Wrong Input Provided for ${identifier} , Must be of type ${type}`,
	};
}

module.exports = {
	validatePoductInputRequiements,
	validateProductInputTypes,
};
