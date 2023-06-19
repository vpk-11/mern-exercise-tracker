const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// this configures the server in such a way that we can have our environment variables in a dotenv file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // allows us to parse JSON for front end parsing

// Connect to DB (ATLAS)
const uri = process.env.ATLAS_URI;
// Connect to DB
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("Connected to DB...");
});
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// 	.then((result) => {
//         console.log("MongoDB Database Connected...");
//         app.listen(PORT, () => {
//             console.log(`Server running on port ${PORT}`)
//         });
//     })
//     .catch((err) => {
//         console.log("Error connecting to DB");
//     });

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});