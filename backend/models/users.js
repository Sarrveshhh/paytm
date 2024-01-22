const mongoose = require("mongoose");

const userSchema = mongoose.schema({
    username: String,
    password: String, 
    email: String,
    fname: String, 
    lname: String
});


module.exports = mongoose.model('Paytm-Users', userSchema);


