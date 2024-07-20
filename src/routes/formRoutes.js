const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', protect, formController.getForms);
router.get('/:id', protect, formController.getFormById); // เพิ่มเส้นทางนี้เพื่อดึงแบบสอบถามตาม ID
router.post('/', protect, admin, formController.createForm);
router.put('/:id', protect, admin, formController.updateForm);
router.delete('/:id', protect, admin, formController.deleteForm);

module.exports = router;
