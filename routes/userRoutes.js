const express = require('express');
const { body } = require('express-validator');

const {
  userExists,
  protectToken,
  protectEmploye,
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

  router.get('/', protectEmploye, getAllUsers);

router.get('/check-token', checkToken);
router
  .route('/:id')
  .get(protectEmploye,userExists, getUserById)
  .patch(userExists, protectAccountOwner, updateUser)
  .delete(userExists, protectAccountOwner, deleteUser);

module.exports = { userRouter: router };
