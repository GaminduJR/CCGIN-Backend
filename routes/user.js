//login user
router.post(
  "/user/login",
  userController.loginUser
);

//register user
router.post(
  "/user/register",
  upload.single("file"),
  userController.registerUser
);

router.post(
  "/user/logout",
  userController.logoutUser
);

//get users
router.get("/user", userController.getUser);

// //update user
// router.put(
//   "/user/update/:id",
//   upload.single("file"),
//   userController.editUser
// );

// //delete user
// router.delete("/user/delete/:id", userController.deleteUser);

// //get a specific user
// router.get("/user/:id", userController.getSpecificUser);

router.get('/user/check-session', userController.authenticate);
