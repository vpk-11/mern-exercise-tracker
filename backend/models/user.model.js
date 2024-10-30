const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String, // typechecking
		required: true, // makes sure that that each one is unique
		unique: true, // Makes sure each one is unique
		trim: true, // Trims whitespace from the string
		minlength: 3
	},
}, {
	timestamps: true // stores record of creation time and date and whanot
});

const User = mongoose.model('User', userSchema);
module.exports = User;