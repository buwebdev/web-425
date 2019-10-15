const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QASchema = new Schema({
  questionId: String,
  answerId: String
})

const QuizResultSchema = new Schema({
  testId: String,
  employeeId: String,
  qa: [QASchema]
})

/*
const composerSchema = new Schema({
  firstName: String,
  lastName: String
}, {collection: 'composers'});

let Composer = mongoose.model('Composer', composerSchema);
*/

let quizResult = mongoose.model('QuizResult', QuizResultSchema);

module.exports = Composer;
