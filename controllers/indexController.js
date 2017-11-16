// Display Index page
exports.index_page = function (req, res) {
  // if (req.isAuthenticated()) {
  //     res.send('NOT IMPLEMENTED: Index list');
  // }
  // res.redirect('/users/login');

  res.render('index');
};

// Display User page
exports.user_page = function (req, res) {

  res.render('page/user');
};
