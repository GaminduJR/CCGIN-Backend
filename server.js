const express = require('express');
const mongoose = require('mongoose');
const bodyPaser= require('body-parser');
const cors = require('cors');

const app = express(); 

//import routes
const studentRoutes = require('./routes/student');
const lecturerRoutes = require('./routes/lecturer');
const bookRoutes = require('./routes/book');
const workerRoutes = require('./routes/worker');
const librarianRoutes = require('./routes/librarian');
const userRoutes = require('./routes/user');

//app middleware
app.use(bodyPaser.json());
app.use(cors());

//route middleware
app.use(studentRoutes);
app.use(lecturerRoutes);
app.use(bookRoutes);
app.use(workerRoutes);
app.use(librarianRoutes);
app.use(userRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://gamindu:gamindu123@cluster0.vybknhr.mongodb.net/mernCRUD?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connection error', err));

app.listen(PORT , () => {
    console.log(`App is running on ${PORT}`);
});

