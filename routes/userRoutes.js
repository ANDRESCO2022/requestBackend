const express = require('express');
const { userExists } = require('../middlewares/userMiddlewares');
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
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUserValidations, checkValidations, createUser);

router
  .route('/:id')
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { usersRouter: router };
