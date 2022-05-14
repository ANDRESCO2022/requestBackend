const express = require('express');
const { repairExists} = require('../middlewares/repairMiddlewares');
const { protectToken,protectEmploye}= require('../middlewares/userMiddlewares')
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
router.get('/completed', protectEmploye, getAllCompletedRepairs)
router.get('/pending', protectEmploye, getAllPendingRepairs);
router
  .route('/:id')
  .get(repairExists, protectEmploye, getRepairById)
  .patch(repairExists,protectEmploye, updateRepair)
  .delete(repairExists, protectEmploye, deleteRepair);

module.exports = { repairsRouter: router };
