import {addCreationAndUpdatingDate} from '../../utils/entities';


export const ProductListItemMapper = product => ({
	id: product._id,
	title: product.title,
	price: parseFloat(product.price)
});

/**
 *
 **/
export const ProductMapper = (product) => ({
	id: product._id,
	title: product.title,
	description: product.description,
	price: parseFloat(product.price),
	...addCreationAndUpdatingDate(product)
});