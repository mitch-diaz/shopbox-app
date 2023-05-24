// 👇 from original project

module.exports = (req, res, next) => {
  // if an already logged in user tries to access the login page it
  // redirects the user to the home page
  if (req.session.user) {
    return res.redirect('/');
  }
  next();
};



// ==========================================================
// 👇 from new Ironlauncher

// module.exports = (req, res, next) => {
//   // if an already logged in user tries to access the login page it
//   // redirects the user to the home page
//   if (req.session.currentUser) {
//     return res.redirect("/");
//   }
//   next();
// };
