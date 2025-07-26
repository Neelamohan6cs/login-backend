const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./connect_db');

// Your main routes
const todo_route = require('./todo_route'); // Todo routes
const auth = require('./routes/auth'); // Auth route
const loginRoute =require("./routes/login");
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Routes

app.use('/todo', todo_route);
app.use("/login",loginRoute)
app.use('/', auth); // ✅ this mounts /register correctly

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
