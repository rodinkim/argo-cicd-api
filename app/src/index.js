import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import todoRoutes from './routes/todos.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
