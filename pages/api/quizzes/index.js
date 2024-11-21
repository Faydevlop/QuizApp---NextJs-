// pages/api/quizzes/index.js
import connectToDatabase from '../../../lib/mongodb';
import Quiz from '../../../models/Quiz';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const quizzes = await Quiz.find({});
        res.status(200).json({ success: true, data: quizzes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const quiz = await Quiz.create(req.body);
        res.status(201).json({ success: true, data: quiz });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
