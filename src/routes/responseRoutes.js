const express = require('express');
const router = express.Router();
const responseController = require('../controllers/responseController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', protect, responseController.createResponse);
router.get('/form/:form_id', protect, responseController.getResponsesByFormId);
router.get('/:id', protect, responseController.getResponseById);
router.get('/user/:user_id', protect, responseController.getUserResponses); // เส้นทางใหม่สำหรับการตรวจสอบการตอบคำถามที่ทำโดยผู้ใช้
router.put('/:id', protect, responseController.updateResponse);
router.delete('/:id', protect, responseController.deleteResponse);

module.exports = router;
