import {createUser, userSignIn} from '../../services/user.service'
import {sendEmail} from '../../services/mail';

import UserMapper from './auth.mapper';
import {BadRequestErrorHandler} from "../../errors";

/**
 * @desc
 **/
export const CreateUserController = async (request, response, next) => {
	const {
		first_name,
		last_name,
		password,
		email,
		salt,
		city,
		gender
	} = request.body;

	try {

		const {user, token} = await createUser({
			first_name,
			last_name,
			password,
			email,
			salt,
			city,
			gender
		});

		await sendEmail({
			to: user.email,
			subject: 'Registration',
			text: 'You have just been successfully registered on our Cool portal.'
		});

		response
			.status(201)
			.json({
				status: true,
				token,
				user: UserMapper(user)
			});
	} catch (e) {
		next(e);
	}
}

export const SignInController = async (request, response, next) => {
	const {email, password} = request.body;

	try {
		if (!email) {
			throw new BadRequestErrorHandler('Email not set.');
		}

		const {user, token} = await userSignIn({email, password});

		response
			.status(200)
			.json({
				status: true,
				token,
				user: UserMapper(user)
			});
	} catch (e) {
		next(e);
	}
}