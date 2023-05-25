import {celebrate, Segments, Joi} from "celebrate";

export const productIdParamValidator = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		productId: Joi.string().alphanum().required()
	})
});