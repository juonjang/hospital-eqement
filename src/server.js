const express = require('express');
const sequelize = require('./config/database');
const formRoutes = require('./routes/formRoutes');
const questionRoutes = require('./routes/questionRoutes');
const userRoutes = require('./routes/userRoutes');
const responseRoutes = require('./routes/responseRoutes');

// Import models เพื่อให้ Sequelize รู้จัก models และความสัมพันธ์
const Form = require('./models/formModel');
const Question = require('./models/questionModel');
const User = require('./models/userModel');
const Response = require('./models/responseModel');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use('/api/forms', formRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/responses', responseRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
