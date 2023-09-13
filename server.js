const express = require('express');
const mongoose = require('mongoose');
const bodyPaser= require('body-parser');
const cors = require('cors');

const app = express(); 

//import routes
const postRoutes = require('./routes/posts');
const bookRoutes = require('./routes/book');

//app middleware
app.use(bodyPaser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(bookRoutes);

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

