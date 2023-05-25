import dotenv from 'dotenv';

const environment = dotenv.config();

if (!environment) {
	throw new Error('.env can not be found!');
}

export default {
	/**
	 * @desc API version
	 * @type {Number}
	 **/
	VERSION: process.env.VERSION || 1,

	/**
	 * @desc Application port
	 * @type {Number}
	 **/
	PORT: process.env.PORT || 3000,

	/**
	 * @desc URI parameter to connect to MongoDB
	 * @type {String}
	 **/
	MONGODB_URI: process.env.MONGO_DB_URI,

	/**
	 * @desc Key for encrypt/decrypt data
	 **/
	JWT_SECRET: process.env.JWT_SECRET,

	/**
	 * @desc Mailgun key
	 **/
	MAILGUN_KEY: process.env.MAILGUN_KEY,

	/**
	 * @desc Mailgun Domain
	 **/
	MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN
};