var phrases = require('./ru.json');

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who, asd){
    console.log(phrases.Hello +", " + who.name + "Age = " + asd);
};

console.log("userjs is required!");

exports.User = User;