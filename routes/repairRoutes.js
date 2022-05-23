const express = require('express');
const { repairExists} = require('../middlewares/repairMiddlewares');
const { protectToken,protectEmployee}= require('../middlewares/userMiddlewares')
const {
  createRepairValidations,
  checkValidations,
} = require('../middlewares/validationsMiddlewares');
const {
  getAllCompletedRepairs,
  getAllPendingRepairs,
  getRepairById,
  updateRepair,
  deleteRepair,
  createRepair,
} = require('../controllers/reparController');

const router = express.Router();
router.post('/', createRepairValidations, checkValidations, createRepair);
router.use(protectToken);
router.get('/completed', protectEmployee, getAllCompletedRepairs)
router.get('/pending', protectEmployee, getAllPendingRepairs);
router
  .route('/:id')
  .get(repairExists, protectEmployee, getRepairById)
  .patch(repairExists,protectEmployee, updateRepair)
  .delete(repairExists, protectEmployee, deleteRepair);

module.exports = { repairsRouter: router };
