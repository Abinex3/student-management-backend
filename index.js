const express = require("express");
app = express();

const cors = require('cors');
app.use(cors({
    origin : ["http://localhost:3000"]
}));

const db = require('./db.config');
const info = require('./models/student.model');
const adminInfo = require('./models/admin.model');
const studentRouter = require('./routes/student');
const adminRouter = require('./routes/admin');
const emailRouter = require('./routes/email');

app.listen(3001, () => {
    console.log("Backend is running!");
})

const mongoose = require("mongoose");
mongoose.connect(db)
.then(() => {
    console.log("Database Connencted");
})


const nodemailer = require('nodemailer')

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use('/', studentRouter);
app.use('/', adminRouter);
app.use('/', emailRouter);