var user = require('./user/index');

var vasya = new user.User("Vasyz");
var petya = new user.User("Roma");

vasya.hello(petya, 15);