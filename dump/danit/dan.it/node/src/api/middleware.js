import jwt from 'express-jwt';
import config from '../config';

import {ProductACL} from '../services/acl';
import {
	UnAuthorizedErrorHandler,
	AccessDeniedErrorHandler
} from '../errors';


export const AuthorizedUserOnly = (request, response, next) => {
	const getTokenFromHeader = req => {
		if (!req.headers.authorization) {
			throw new UnAuthorizedErrorHandler('Only authorized user can get access to this end-point.');
		}

		if (
			(
				req.headers.authorization &&
				req.headers.authorization.split(' ')[0] === 'Token') ||
			(
				req.headers.authorization &&
				req.headers.authorization.split(' ')[0] === 'Bearer')
		) {



			return req.headers.authorization.split(' ')[1];
		}
		return null;
	};

	const isAuth = jwt({
		secret: config.JWT_SECRET,
		userProperty: 'token',
		algorithms: ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512', 'HS256', 'HS384', 'HS512', 'none'],
		getToken: getTokenFromHeader
	});

	return isAuth;
}


export const CanDeleteProduct = (request, response, next) => {
	if (!request.token) {
		throw new UnAuthorizedErrorHandler('Token parameter not found.');
	}

	const {accessList} = request.token;

	if (!(new ProductACL(accessList)).canDelete()) {
		throw new AccessDeniedErrorHandler('Current user can not delete product.');
	}

	next();
}
