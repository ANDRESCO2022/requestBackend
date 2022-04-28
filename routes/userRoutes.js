const express = require('express');
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.route('/:id')
.get(getUserById)
.patch(updateUser)
.delete(deleteUser);

module.exports = { userRouter: router };
