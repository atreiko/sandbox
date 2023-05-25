import {Router} from 'express';
import HomeRoute from './home';
import ProductRoute from './products';
import AuthRoute from './auth';

export default () => {
	const router = Router();

	HomeRoute(router);
	ProductRoute(router);
	AuthRoute(router);

	return router;
}