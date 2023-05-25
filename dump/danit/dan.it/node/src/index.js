import '@babel/polyfill';
import 'regenerator-runtime/runtime.js';
import config from './config';

import appLoader from './loaders';

(async function () {
	const port = config.PORT;
	const app = await appLoader({config});

	app.listen(port, (err) => {
		if (err) {
			console.log('Error has just happened --> ', err);
			process.exit(1);
			return;
		}

		console.log(`
        ################################################
        🛡️ Server listening on port: ${port} and "/api/v${config.VERSION}"
        ################################################`);
	});
})();