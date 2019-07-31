const express = require('express');
const router = express.Router();
const userDb = require('./userModel')

//GET all users

router.get('/', (req,res)=>{
    userDb.find()
        .then(users =>{
            res.status(200).json({users});
            console.log(users);
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

//GET user by id

router.get('/:id', (req,res)=>{
    const { id } = req.params;
    userDb.findById(id)
        .then(user =>{
            res.status(200).json({user});
            console.log(user);
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

//POST class by trainer

router.post('/:id/post' , (req,res) =>{
    const { id } = req.params;
    let post = req.body;

    userDb.addClass({trainer_id:id, ...post})
        .then(post =>{
            res.status(201).json(post);
            console.log(`New Fitness event added: ${post}`)
        })
        .catch(err => {
            res.status(500).json(err);
            console.log(err);
        })


})

module.exports = router;