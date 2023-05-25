import express from 'express';
import apiRoutes from '../api';
import bodyParser from 'body-parser';
import cors from 'cors';
import {isCelebrateError} from 'celebrate';

const allowedOrigins = [
	'http://localhost:3000',
	'https://my-lovely-site.com'
];

export default ({config}) => {
	const app = express();

	app.use(cors({
		origin: function (origin, callback) {
			// allow requests with no origin
			// (like mobile apps or curl requests)
			if (!origin) {
				return callback(null, true);
			}

			if (allowedOrigins.indexOf(origin) === -1) {
				const msg = 'The CORS policy for this site does not allow access from the specified Origin.';

				return callback(new Error(msg), false);
			}

			return callback(null, true);
		},
		credentials: true
	}));

	// Apply body parser
	app.use(bodyParser.json());

	// Load API routes
	app.use(`/api/v${config.VERSION}`, apiRoutes());

	/// catch 404 and forward to error handler
	app.use((req, res, next) => {
		const err = new Error('Not Found');
		err['status'] = 404;

		next(err);
	});

	/// error handlers
	app.use((
		err,
		request,
		response, next
	) => {
		let inError = err;

		if (isCelebrateError(inError)) {
			//console.log('ERROR -> ', err.details );

			inError = {
				code: 422,
				error: err.message
			}
		}

		let statusCode = typeof inError === 'object' && inError.code > 0
			? inError.code
			: 500;

		const {
			status = statusCode,
			name = '',
			message: error = 'Internal Application Error'
		} = err;

		const customResponse = response
			.status(statusCode)
			.json({
				error,
				code: statusCode
			})

			// .json(StatusService.buildError(error, statusCode));

		return name === 'UnauthorizedError'
			? customResponse.end()
			: customResponse;
	});

	return app;
};