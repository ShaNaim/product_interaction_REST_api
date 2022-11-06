function toPoductInput(product) {
	const productInput = { unit: {} };

	productInput.name = product.productName;
	productInput.cost = product.productCost;
	productInput.price = product.productPrice;

	if ("productImages" in product) productInput.images = product.productImages;
	if ("description" in product) productInput.desctription = product.desctription;
	if ("productUnit" in product) productInput.unit.type = product.productUnit;
	if ("productUnitValue" in product) productInput.unit.value = product.productUnitValue;

	return productInput;
}

function toProductOutput(product) {
	const productOuput = { unit: {} };

	productOuput.productName = product.name;
	productOuput.productPrice = product.price;
	productOuput.productCost = product.cost;
	productOuput.productImages = product.images;
	productOuput.productUnit = product.unit.type;
	productOuput.productUnitValue = product.unit.value;

	return productOuput;
}

module.exports = {
	toPoductInput,
	toProductOutput,
};
