const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			require: [true, "Please Enter a Name"],
		},
		value: { type: Number, default: 0, require: [true, "Please Enter a Unit Value"] },
	},
	{
		timestamps: false,
		_id: false,
	}
);

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: [true, "Please Enter a Name"],
		},
		price: { type: Number, default: 0, require: [true, "Please Enter a Product Price"] },
		cost: { type: Number, default: 0, require: [true, "Please Enter a Product Cost"] },
		description: { type: String, required: false },
		shopId: { type: mongoose.Schema.Types.ObjectId, ref: "shop" },
		images: { type: Array, required: false },
		active: { type: Boolean, default: false, required: false },
		unit: unitSchema,
	},
	{ timestamps: true }
);

const Product = mongoose.model("product", productSchema);
module.exports = { Product, productSchema };
