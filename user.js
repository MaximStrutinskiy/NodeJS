function User(name) {
    this.name = name;
}

User.prototype.hello = function(who, asd){
    console.log("Hello, " + who.name + "Age = " + asd);
};

console.log("userjs is required!");

exports.User = User;