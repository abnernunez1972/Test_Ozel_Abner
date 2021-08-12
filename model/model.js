const mongoose = require("mongoose");

/*
name (String o VARCHAR)
lastname (String o VARCHAR)
email (String o VARCHAR)
dni (Number o INT)
password (String o VARCHAR)
*/

const schema = mongoose.Schema({
	name: String,
    lastname: String,
    email: String,
    dni: Number,
    password: String
})

module.exports = mongoose.model("users", schema);