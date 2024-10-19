const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/codecatalyst', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// Models
const Contact = require('./models/contact');
const Career = require('./models/career');

// Contact form submission route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });
  newContact.save().then(contact => res.json(contact)).catch(err => res.status(500).json({ error: err.message }));
});

// Career form submission route
app.post('/api/career', (req, res) => {
  const { name, email, resume } = req.body;
  const newCareer = new Career({ name, email, resume });
  newCareer.save().then(career => res.json(career)).catch(err => res.status(500).json({ error: err.message }));
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
