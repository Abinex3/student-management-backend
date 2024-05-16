const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const student = require('../models/student.model');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rohithabi30@gmail.com',
        pass: '9489662785'
    }
});


router.get('/sendMarksEmails', async (req, res) => {
    student.forEach(data => {
        const mailOptions = {
            from: 'rohithabi30@gmail.com',
            to: student.email,
            subject: 'Your Marks Report',
            html: `<h2>Dear ${data.name},</h2>
            <p>Your marks for the maths exam: ${data.maths}</p>
            <p>Your marks for the physics exam: ${data.physics}</p>
            <p>Your marks for the chemistry exam: ${data.chemistry}</p>
            <p>Your marks for the average exam: ${data.cutoff}</p>
            <p>Your marks for the total exam: ${data.total}</p>`

        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.log('Error occurred:', error);
            } else {
                console.log('Email sent to', data.email);
            }
        });
    });

    res.send('Emails sent successfully.');
});

module.exports = router;
