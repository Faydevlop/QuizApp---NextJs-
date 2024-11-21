// models/Quiz.js
import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
});

export default mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);
