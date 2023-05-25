import {
	getProducts,
	createProduct,
	getProductById,
	deleteProductById
} from '../../services/product.service';
import {
	ProductMapper,
	ProductListItemMapper
} from './product.mapper';


export const DeleteProductByIdController = async (request, response, next) => {
	try {
		const {productId} = request.params;
		const product = await deleteProductById(productId);

		if (!product) {
			throw new Error('Product not found');
		}

		response
			.status(200)
			.json({
				status: true,
				product: ProductMapper(product)
			})

	} catch(e) {
		next(e);
	}
}

/**
 * @desc Find product by ID
 **/
export const ProductByIdController = async (request, response, next) => {
	try {
		const {productId} = request.params;
		const product = await getProductById(productId);

		if (!product) {
			throw new Error('Product not found.');
		}

		return response
			.status(200)
			.json({
				status: true,
				product: ProductMapper(product)
			})

	} catch (e) {
		next(e)
	}
}

/**
 * @desc Повертає список товарів
 **/
export const ProductListController = async (request, response, next) => {

	try {
		const {
			offset = 0,
			limit = 10
		} = request.query;

		const products = await getProducts({
			offset,
			limit
		});

		response
			.status(200)
			.json({
				status: true,
				products: Array.isArray(products)
					? products
						.map(product => ProductListItemMapper(product))
					: []
			})

	} catch (e) {
		next(e)
	}

	response
		.status(200)
		.json({
			success: true,
			data
		})
}

/**
 * @desc Create product
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 * @return {Promise}
 **/
export const CreateProductController = async (request, response, next) => {
	try {
		const {
			title,
			price,
			description,
		} = request.body;

		const product = ProductMapper(
			await createProduct({
				title,
				price,
				description,
			})
		);

		return response
			.status(201)
			.json({
				status: true,
				product
			})

	} catch (e) {
		next(e);
	}
}