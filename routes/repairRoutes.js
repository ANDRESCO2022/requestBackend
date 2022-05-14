const express = require('express');
const { repairExists } = require('../middlewares/repairMiddlewares');
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

router.get('/completed',  getAllCompletedRepairs)
router.get('/pending', getAllPendingRepairs);
router.post('/', createRepairValidations, checkValidations, createRepair);
router
  .route('/:id')
  .get(repairExists, getRepairById)
  .patch(repairExists, updateRepair)
  .delete(repairExists, deleteRepair);

module.exports = { repairsRouter: router };
