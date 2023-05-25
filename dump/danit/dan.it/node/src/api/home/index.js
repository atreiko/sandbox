import {IndexController} from './index.controller'
import {Router} from 'express';

const route = Router();

export default function(root) {
	root.use('/', route);

	/**
	 * @desc GET-метод для отримання головної сторінки
	 **/
	route.get('/', IndexController);
}