const Form = require('../models/formModel');
const Question = require('../models/questionModel');

exports.getForms = async (req, res) => {
  try {
    const forms = await Form.findAll({
      include: [Question], // รวมคำถามที่เกี่ยวข้อง
    });
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findOne({
      where: { id },
      include: [Question], // รวมคำถามที่เกี่ยวข้อง
    });
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createForm = async (req, res) => {
  try {
    const newForm = await Form.create(req.body);
    res.status(201).json(newForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateForm = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedForm = await Form.update(req.body, {
      where: { id }
    });
    res.json(updatedForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteForm = async (req, res) => {
  try {
    const { id } = req.params;
    await Form.destroy({
      where: { id }
    });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
