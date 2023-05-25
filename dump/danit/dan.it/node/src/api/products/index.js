import {
	ProductByIdController,
	ProductListController,
	CreateProductController,
	DeleteProductByIdController
} from './products.controller'

import {
	productIdParamValidator
} from './product.validation';

import {
	CanDeleteProduct,
	AuthorizedUserOnly
} from '../middleware';

import {Router} from 'express';

const route = Router();

export default function (root) {
	root.use('/products', route);

	/**
	 * @desc GET-метод для отримання списку продуктів
	 **/
	route.get('/', ProductListController);

	/**
	 * @desc Create product
	 **/
	route.post('/',
		AuthorizedUserOnly(),
		CreateProductController
	);

	/**
	 * @desc Get product by Id
	 **/
	route.get('/:productId', ProductByIdController);

	/**
	 * @desc Delete product by Id
	 **/
	route.delete(
		'/:productId',  /// <-----

		productIdParamValidator,

		AuthorizedUserOnly(),
		CanDeleteProduct,


		DeleteProductByIdController  // <----
	);
}