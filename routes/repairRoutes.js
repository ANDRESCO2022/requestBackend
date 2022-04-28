const express = require('express');
const {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require('../controllers/reparController');

const router = express.Router();

router.get('/', getAllRepairs);
router.post('/', createRepair);
router
  .route('/:id')
  .get(getRepairById)
  .patch(updateRepair)
  .delete(deleteRepair);

module.exports = { repairRouter: router };
