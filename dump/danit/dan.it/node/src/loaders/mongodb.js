import mongoose from 'mongoose';

/**
 * @desc З'єднання з Базою Даних
 * @return {Promise}
 **/
export default async function({config}) {
	const connection = await mongoose
		.connect(
			config.MONGODB_URI, {
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true
			});

	return connection.connection.db;
}