// mongoose -> https://mongoosejs.com/docs/guide.html#definition
import mongoose from 'mongoose';

// create a schema
const User = new mongoose.Schema({
	email: {type: String, unique: true, required: true},
	first_name: {type: String, required: true},
	last_name: {type: String, required: false},
	city: {type: String, required: false, default: null},
	salt: {type: String, required: true},
	password: {type: String, required: true},
	allowNewsletters: {type: Boolean, default: true},
	termsAccepted: {type: Boolean, default: false},
	role: {type: String, required: true},
	gender: {
		type: String,
		enum: ['male', 'female', ''],
		default: '',
		required: false
	},
	status: {type: String, default: '1'},
	created_at: {type: Date, default: new Date()},
	updated_at: {type: Date, default: new Date()}
});

export const UserModel = mongoose.model('User', User);
