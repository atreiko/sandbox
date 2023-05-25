import {randomBytes} from 'crypto';
import argon2 from 'argon2';
import UserModel from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from '../config';
import {UnAuthorizedErrorHandler} from '../errors';
import {UserRepository} from '../repositories';

/**
 * @desc Generate token
 **/
function generateToken({id, role}) {
	const today = new Date();
	const exp = new Date(today);
	exp.setDate(today.getDate() + 60);

	const permissions = {
		products: {
			create: false,
			update: false,
			delete: false
		}
	};

	if (role === 'admin') {
		permissions.products = {
			create: true,
			update: true,
			delete: true
		};
	}

	return jwt.sign(
		{
			id,
			accessList: {
				...permissions
			},
			exp: exp.getTime() / 1000,
		},
		config.JWT_SECRET,
	);
}

/**
 * @desc Sing in
 **/
export const userSignIn = async ({email, password}) => {
	// get user by email
	const user = await (new UserRepository()).findOne({email});

	if (!user) {
		throw new UnAuthorizedErrorHandler('User with such email not found.');
	}

	const verification = await argon2.verify(
		user.password,
		password,
		{
			salt: user.salt
		}
	);

	if (!verification) {
		throw new UnAuthorizedErrorHandler('Invalid Password.');
	}

	return {
		user,
		token: generateToken(user)
	};
}

/**
 * @desc Creates user
 **/
export const createUser = async ({
									 first_name,
									 last_name,
									 password:pswdIn,
									 email,
									 city,
									 gender,
									 role = 'guest'
								 }) => {
	const salt = randomBytes(32);
	const password = await argon2.hash(pswdIn, {salt});

	const user = await (new UserRepository()).create({
		first_name,
		last_name,
		password,
		email,
		salt,
		city,
		role,
		gender
	});

	return {
		user,
		token: generateToken(user)
	}
}