const express = require('express');
const { body } = require('express-validator');

const {
  userExists,
  protectToken,
  protectEmployee,
  protectAccountOwner,
} = require('../middlewares/userMiddlewares');
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validationsMiddlewares');
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
  checkToken,
} = require('../controllers/userController');

const router = express.Router();
router.post('/', createUserValidations, checkValidations, createUser);
router.post('/login', login);

  router.use(protectToken);

  router.get('/', protectEmployee, getAllUsers);

router.get('/check-token', checkToken);
router
  .route('/:id')
  .get(protectEmployee,userExists, getUserById)
  .patch(userExists, protectAccountOwner, updateUser)
  .delete(userExists, protectAccountOwner, deleteUser);

module.exports = { userRouter: router };
