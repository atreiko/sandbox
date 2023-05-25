import mailgun from 'mailgun-js';
import config from '../../config';

export const sendEmail = async ({to, subject, text}) => {
	const sendMail = mailgun({
		apiKey: config.MAILGUN_KEY,
		domain: config.MAILGUN_DOMAIN
	});

	const data = {
		to,
		subject,
		text,
		from: 'Excited User <noresponse@my.domain.com>',
	};

	return sendMail.messages().send(data);
}