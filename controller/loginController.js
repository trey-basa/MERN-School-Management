const express = require('express');
const router = express.Router();
var objectId =  require('mongoose').Types.ObjectId;
const User = require('../models/users');
var userdbService = require('./user.service');
//Retrieving contacts   
router.get('/list', (req, res, next) => {
    User.find(function(err, users) {
        res.json(users);
    });
});

//add contacts
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name:req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save((err, user)=>{
        if(err)
        {
            res.json({msg: 'Failed to add contact'});
        }
        else {
            res.json({msg: 'Contact added successfully'});
        }
    })
});

//delete contacts
router.delete('/user/:id', (req, res, next) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send(`No recoder with given id : ${req.params.id}`);
    User.findByIdAndRemove(req.params.id, function(err, result) {
        if(err)
        {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});
router.get('/find/:id', (req, res, next) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send(`No recoder with given id : ${req.params.id}`);
    User.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('error in retriving User : ' + JSON.stringify(err,undefined, 2));
        }
    });
});

router.put('/:id', (req, res, next) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send(`No recoder with given id : ${req.params.id}`);
    var user = new User({
        name:req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    User.findByIdAndUpdate(req.params.id,{$set:user},{new : true },(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('error in retriving User : ' + JSON.stringify(err,undefined, 2));
        }
    });
});
router.post('/authenticate', (req, res)=> {
    
    userdbService.authenticate(req.body.email, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                res.send(user);
            } else {
                // authentication failed
                res.status(400).send('email or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
});
module.exports = router;