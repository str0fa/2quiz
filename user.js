
const express = require('express');
const mongoose = require('mongoose');

// connection MongoDB Atlas
mongoose.connect('mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exams23002', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const ExamRecord = mongoose.model('examrecords', {
                                        sid: String,
                                        name: String,
                                      });

const app = express();


app.get('/', async (req, res) => {
  const studentNumber = '300359240'; 
  const fullName = 'Ekaterina Leyvikova'; 

  try {
    const ExamRecordDocument = new ExamRecord({ sid: studentNumber, name: fullName });
    await ExamRecordDocument.save();

    res.send('Document added to DB.');
  } catch (error) {
    console.error('Error :', error);
    res.status(500).send('Error in the inserting.');
  }
});


app.listen(3000, () => {
  console.log('server running (port 3000)');
});

