var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeauth', {useMongoClient: true});

var db = mongoose.connection;

// User Schema
var UserShema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    profileimage: {
        type: String
    }
});

var User = module.exports = mongoose.model('User', UserShema);

module.exports.createUser = function (newUser, callback) {
    newUser.save(callback);
};