// const express = require('express');
// const Users = require('../models/user');

// const router = express.Router();
// const bcrypt = require('bcryptjs')

// //login user
// router.post(
//   "/user/login",
//   userController.loginUser
// );

// //register user
// router.post(
//   "/user/register",
//   upload.single("file"),
//   userController.registerUser
// );

// router.post(
//   "/user/logout",
//   userController.logoutUser
// );

// //get users
// router.get("/user", userController.getUser);


// router.get('/user/check-session', userController.authenticate);

// // register user
// router.post('/user/register', async (req, res) => {
//   const { userName, userEmail, userPassword } = req.body

//   if (!userName || !userEmail || !userPassword) {
//     res.status(400)
//     throw new Error('Please add all fields')
//   }

//   // Check if user exists
//   const userExists = await Users.findOne({ userEmail })

//   if (userExists) {
//     res.status(400)
//     throw new Error('User already exists')
//   }

//   // Hash password
//   const salt = await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(userPassword, salt)

//   // Create user
//   const user = await Users.create({
//     userName,
//     userEmail,
//     userPassword: hashedPassword,
//   })

//   if (user) {
//     res.status(201).json({
//       _id: user.id,
//       userName: user.userName,
//       userEmail: user.userEmail,
//       // token: generateToken(user._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid user data')
//   }
// });

// // login user
// router.post('/user/login', async (req, res) => {
// const { userEmail, userPassword } = req.body

// // Check for user userEmail
// const user = await Users.findOne({ userEmail })

// if (user && (await bcrypt.compare(userPassword, user.userPassword))) {
//   req.session.userId = user._id;

//   res.json({
//     _id: user.id,
//     userName: user.userName,
//     userEmail: user.userEmail,
//   })

// } else {
//   res.status(400)
//   throw new Error('Invalid credentials')
// }
// });

// //retrieve user
// router.get('/user', async (req, res) => {
//   try {
//       const users = await Users.find().exec();
//       return res.status(200).json({
//           success: true,
//           existingUsers: users
//       });
//   } catch (err) {
//       return res.status(400).json({
//           error: err
//       });
//   }
// });

// //update user
// router.put('/user/update/:id', async (req, res) => {
//   try {
//       const user = await Users.findByIdAndUpdate(req.params.id, { $set: req.body }).exec();

//       if (!user) {
//           return res.status(404).json({ error: 'User not found' });
//       }

//       return res.status(200).json({
//           success: 'Update Successfully'
//       });
//   } catch (err) {
//       return res.status(400).json({ error: err });
//   }
// });

// //Delete user
// router.delete('/user/delete/:id', async (req, res) => {
//   try {
//       const deletedUser = await Users.findByIdAndRemove(req.params.id).exec();

//       if (!deletedUser) {
//           return res.status(404).json({ message: 'User not found' });
//       }

//       return res.json({ message: 'Delete Successful', deletedUser });
//   } catch (err) {
//       return res.status(400).json({ message: 'Delete unsuccessful', error: err });
//   }
// });

// module.exports = router;

const express = require('express')

// controller functions
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router