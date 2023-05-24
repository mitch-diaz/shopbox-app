// 👇 This is from orinal project

module.exports = (req, res, next) => {
  // checks if the user is logged in when trying to access a specific page
  if (!req.session.user) {
    return res.redirect("/auth/login");
  }
  req.user = req.session.user;
  next();
};


// ========================================
// 👇 Came with new Ironlaunch

// module.exports = (req, res, next) => {
//   // checks if the user is logged in when trying to access a specific page
//   if (!req.session.currentUser) {
//     return res.redirect("/auth/login");
//   }

//   next();
// };
