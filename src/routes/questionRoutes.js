const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', protect, questionController.getQuestions);
router.get('/:id', protect, questionController.getQuestionById);
router.post('/', protect, admin, questionController.createQuestion);
router.put('/:id', protect, admin, questionController.updateQuestion);
router.delete('/:id', protect, admin, questionController.deleteQuestion);

module.exports = router;
