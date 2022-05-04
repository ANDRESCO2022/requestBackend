const express = require('express');
const { repairExists } = require('../middlewares/repairMiddlewares');
const {
  createRepairValidations,
  checkValidations,
} = require('../middlewares/validationsMiddlewares');
const {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require('../controllers/reparController');

const router = express.Router();

router.get('/', getAllRepairs);
router.post('/', createRepairValidations, checkValidations, createRepair);
router
  .route('/:id')
  .get(repairExists, getRepairById)
  .patch(repairExists, updateRepair)
  .delete(repairExists, deleteRepair);

module.exports = { repairsRouter: router };
