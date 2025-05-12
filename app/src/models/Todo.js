import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Todo', todoSchema);
