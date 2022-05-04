const { User } = require('../models/userModels');
const userExists = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return next(new AppError('User does not exist with given Id', 404));
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userExists };
