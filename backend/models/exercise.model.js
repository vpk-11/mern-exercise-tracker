const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	username: {
		type: String, // typechecking
		required: true, // makes sure that that each one is unique
	},
	description: {type: String, required: true},
	duration: {type: Number, required: true},
	date: {type: Date, required: true}
}, {
	timestamps: true // stores record of creation time and date and whanot
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;