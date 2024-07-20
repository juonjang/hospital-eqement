const Response = require('../models/responseModel');
const User = require('../models/userModel');
const Form = require('../models/formModel');
const Question = require('../models/questionModel');

exports.createResponse = async (req, res) => {
  try {
    const newResponse = await Response.create(req.body);
    res.status(201).json(newResponse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getResponsesByFormId = async (req, res) => {
  try {
    const { form_id } = req.params;
    const responses = await Response.findAll({
      where: { form_id },
      include: [
        { model: User, attributes: ['first_name', 'last_name', 'username'] },
        { model: Question, attributes: ['questionText'] },
      ],
    });
    res.json(responses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getResponseById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Response.findByPk(id, {
      include: [
        { model: User, attributes: ['first_name', 'last_name', 'username'] },
        { model: Question, attributes: ['questionText'] },
      ],
    });
    if (!response) {
      return res.status(404).json({ error: 'Response not found' });
    }
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateResponse = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedResponse = await Response.update(req.body, {
      where: { id },
    });
    res.json(updatedResponse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteResponse = async (req, res) => {
  try {
    const { id } = req.params;
    await Response.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// เพิ่มฟังก์ชันสำหรับการตรวจสอบการตอบคำถามที่ทำโดยผู้ใช้
exports.getUserResponses = async (req, res) => {
    try {
      const { user_id } = req.params;
      const responses = await Response.findAll({
        where: { user_id },
        include: [
          { model: Form, attributes: ['title'] },
          { model: Question, attributes: ['questionText'] },
        ],
      });
      res.json(responses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  