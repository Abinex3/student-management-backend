const express = require("express");
const router = express.Router();
const student = require('../models/student.model');

router.get('/', (req,res) => {
    res.send("server is running");
})

router.post('/register', async (req,res) => {
    const newStudent = new student(req.body);
    try{
        const studentData = await newStudent.save()
        res.status(200).json(studentData);
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await student.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json({ Status: "success", role: user.role});
                // res.json("success");
            } else {
                res.json("password incorrect");
            }
        } else {
            res.json("No user");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
});


module.exports = router;