const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Define a schema and model
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware for parsing JSON body
app.use(cors());
app.use(express.json());

// Route for handling signup
app.post('/signup', (req, res) => {
  const { fullName, email, password } = req.body;

  // Create a new user instance
  const newUser = new User({
    fullName,
    email,
    password,
  });

  // Save the user to the database
  newUser.save()
    .then(() => res.status(200).send('Signup successful'))
    .catch((error) => res.status(500).send('Failed to signup:', error));
});

app.post('/signin', (req, res) => {
    const { email, password } = req.body;
  
    // Find user by email and password
    User.findOne({ email, password })
      .then((user) => {
        if (user) {
          // User found, signin successful
          res.status(200).send('Signin successful');
        } else {
          // User not found or password incorrect
          res.status(401).send('Invalid email or password');
        }
      })
      .catch((error) => res.status(500).send('Failed to signin:', error));
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
