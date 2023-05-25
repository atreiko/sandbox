import ProductModel from '../models/product.model';

/**
 * @desc Delete product by ID
 **/
export const deleteProductById = async id => ProductModel.findByIdAndDelete(id)

/**
 * @desc Search product by Id
 **/
export const getProductById = async id =>
	ProductModel.findById(id);

/**
 * @desc Retrieve product list
 **/
export const getProducts = async ({
									  offset = 0,
									  limit = 10
								  }) => ProductModel
	.find({}, null, {
		skip: parseInt(offset),
		limit: parseInt(limit)
	});

/**
 * @desc Create product
 * @return {Promise}
 **/
export const createProduct = async ({title, price, description}) => {
	return ProductModel.create({
		title,
		description,
		price
	});
}