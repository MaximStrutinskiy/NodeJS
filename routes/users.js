var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './uploads' });
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

/* GET users listing. */

// Register
router.get('/register', function (req, res, next) {
  res.render('register', { title: 'Register' });
});

router.post('/register', upload.single('profileimage'), function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  var profileimage = '';

  if (req.file) {
    console.log('Upload File...');
    profileimage = req.file.filename;
  } else {
    console.log('No file uploaded...');
    profileimage = 'noimage.jpg';
  }

  // Form Validation
  req.checkBody('name', 'Name field is required').notEmpty();
  req.checkBody('email', 'Email field is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username field is required').notEmpty();
  req.checkBody('password', 'Password field is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  // Check Errors
  var errors = req.validationErrors();

  if (errors) {
    res.render('register', {
      errors: errors
    });
  } else {
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password,
      profileimage: profileimage
    });

    User.createUser(newUser, function (err, user) {
      if (err) throw err;
      console.log(user);
    });

    req.flash('success', 'You are now registered and can login');
    res.location('/');
    res.redirect('/users/profile');
  }
});

// Login
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(function (username, password, password2, done) {
  User.getUserByUsername(username, function (err, user) {
    if (err) throw err;
    console.log(user);
    if (!user) {
      return done(null, false, { message: 'Unknown User' });
    }

    User.comparePassword(password, user.password, function (err, isMatch) {
      if (err) return done(err);
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid password' });
      }
    });

  });
}));

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/users/login',
  failureFlash: 'Invalid username or password'
}), function (req, res) {
  req.flash('success', 'You are now logged in');
  res.redirect('/users/profile');
});

// Logout
router.get('/logout', function (req, res) {
  req.logout();
  req.flash('success', 'You are now logged out');
  res.redirect('/users/login');
});

// Profile
router.get('/profile', function (req, res) {
  res.render('profile', { title: 'Profile', user: 'Best user' });
});

// Profile
router.get('/profile', function (req, res) {
  res.render('profile', { title: 'Profile' });
});

module.exports = router;
