// mongoose -> https://mongoosejs.com/docs/guide.html#definition
import mongoose from 'mongoose';

// create a schema
const Product = new mongoose.Schema({
	title: {type: String, required: true},
	price: {type: mongoose.Decimal128, default: 0},
	description: {type: String},

	status: {type: String, default: '1'},
	created_at: {type: Date, default: new Date()},
	updated_at: {type: Date, default: new Date()}
});

export const ProductModel = mongoose.model('Product', Product);
