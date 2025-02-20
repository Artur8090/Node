const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	login: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		maxlength: 20
	},
});
userSchema.methods.done= function() {
	const greeting = `User ${this.login} has been successfully registered`;
	console.log(greeting);
}