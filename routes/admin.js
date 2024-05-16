const express = require("express");
const router = express.Router();
const adminSchema = require("../models/admin.model");


router.get('/input', (req,res) => {
   adminSchema.find()
   .then(responce => res.json(responce))
   .catch(err => console.log(err));
})

router.post('/input', async(req,res) => {
    const inputMark = new adminSchema(req.body);
    try{
        const newInput = await inputMark.save()
        res.status(200).json(newInput);
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.put('/update/:id', async (req, res) => {
    // try{
    //     const id = req.body._id;
    //     const updateStudent = await adminSchema.findByIdAndUpdate(id,req.body, {})
        
    //     res.json(updateStudent)
    // }
    // catch(err){
    //     res.json("Error")
    // }
    
    const id = req.params.id;
    const updateStudent = await adminSchema.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        studentId : req.body.studentId,
        email: req.body.email,
        dob : req.body.dob
    })
    try{    
    res.json(updateStudent)
    }
    catch(err){
    res.json("Error")
    }
})

router.get('/get/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const student = await adminSchema.findById(id);
        res.json(student);
    } catch (err) {
        res.status(500)
    }
});

router.post('/findResult', async (req,res) => {
    const {studentId, email} = req.body
    const findResult = await adminSchema.findOne({email: email, studentId: studentId})
    try{
        res.json(findResult)
    }
    catch(err){
        res.json(err)
    }
})

// router.get('/getResult/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const student = await adminSchema.findById(id);
//         res.json(student);
//     } catch (err) {
//         res.status(500)
//     }
// });


router.delete('/delete/:id', async (req,res) => {
    const id = req.params.id;
    const deleteStudent = await adminSchema.findByIdAndDelete({_id: id})
    try{
        res.json(deleteStudent)
    }
    catch(er){
        res.json(err)
    }
})

module.exports = router;

