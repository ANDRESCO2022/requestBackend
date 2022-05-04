const { Repair } = require('../models/repairModels');
const {catchAsync} = require('../utils/catchAsync')
const {User} = require('../models/userModels')
const getAllRepairs = catchAsync( async (req, res, next) => {
    const repairs = await Repair.findAll({  
      include:[{model: User}]});
    res.status(200).json({ repairs });
  
});

const createRepair = catchAsync( async (req, res,next) => {

    const { date, userId,computerNumber,comments } = req.body;
    const newRepair = await Repair.create({ date, userId, computerNumber, comments });
    res.status(201).json({ newRepair });

});

const getRepairById = catchAsync( async (req, res,next) => {
 
    const {repair}=req; 

    res.status(200).json({
      repair,
    });
  
});

const updateRepair = catchAsync( async (req, res,next) => {
   const {repair}= req
    const { status } = req.body;

   

    await repair.update({ status });

    res.status(200).json({ status: 'Success' });
 
});

const deleteRepair = catchAsync( async (req, res,next) => {

   const {repair} = req;
    await repair.update({ status: 'deleted' });

    res.status(200).json({
      status: 'success',
    });
  
});

module.exports = {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
};
