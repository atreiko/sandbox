import {Router} from 'express';
import { celebrate, Joi, errors, Segments } from 'celebrate';

import {
	SignInController,
	CreateUserController,
} from './auth.controller';

import {
	signInValidator,
	signUpValidator
} from './auth.validation';

const route = Router();

export default function(root) {
	root.use('/auth', route);

	/**
	 * @desc Create user
	 **/
	route.post('/signup', signUpValidator, CreateUserController);

	/**
	 * @desc Authorize user
	 **/
	route.post('/signin', signInValidator, SignInController);
}