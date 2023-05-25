import {celebrate, Joi, Segments} from 'celebrate';

/**
 * @desc Validation for sign in
 **/
export const signInValidator = celebrate({
	[Segments.BODY] : Joi.object().keys({
		email: Joi.string()
			.email()
			.required(),

		password: Joi
			.string()
			.required()
	})
});

export const signUpValidator = celebrate({
	[Segments.BODY] : Joi.object().keys({
		first_name: Joi.string().required(),
		last_name: Joi.string().required(),
		password: Joi.string().required(),
		email: Joi.string().email().required(),
		city: Joi.string().optional(),
		gender: Joi.string().case('lower').optional()
	})
});