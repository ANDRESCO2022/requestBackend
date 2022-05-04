const bcrypt = require('bcryptjs');
const { User } = require('../models/userModels');

const { catchAsync } = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  res.status(200).json({ users });
});

const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    role,
  });
  newUser.password = undefined;
  res.status(201).json({ newUser });
});

const getUserById = catchAsync(async (req, res, next) => {
  const { user } = req;
  res.status(200).json({
    user,
  });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, email } = req.body;
  await user.update({ name, email });

  res.status(200).json({ status: 'Success' });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  await user.update({ status: 'deleted' });

  res.status(200).json({
    status: 'success',
  });
});

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
