// Display Index page
exports.index_page = function (req, res) {
    // if (req.isAuthenticated()) {
    //     res.send('NOT IMPLEMENTED: Index list');
    // }
    // res.redirect('/users/login');

    res.render('build/index');
};

// Display User page
exports.index_page = function (req, res) {
  // if (req.isAuthenticated()) {
  //     res.send('NOT IMPLEMENTED: Index list');
  // }
  // res.redirect('/users/login');

  res.render('build/page/user');
};
