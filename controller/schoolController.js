const express = require('express');
const router = express.Router();
var objectId =  require('mongoose').Types.ObjectId;
const schoolData = require('../models/schooldata');
const schoolNameData = require('../models/schoolNameData');
//Retrieving contacts   
router.get('/list', (req, res, next) => {
    schoolData.find(function(err,doc) {
        res.json(doc);
    });
});
router.get('/schoolname/list', (req, res, next) => {
    schoolNameData.find(function(err,doc) {
        res.json(doc);
    });
});

//add contacts
router.post('/input', (req, res, next) => {
    var newschoolData = new schoolData({
        schoolname:req.body.schoolname,
        year: req.body.year,
        month: req.body.month,
        week:req.body.week,
        eeuro: req.body.eeuro,
        ekhw: req.body.ekhw,
        heuro:req.body.heuro,
        hkhw:req.body.hkhw,
        weuro: req.body.weuro,
        wkhw: req.body.wkhw
    });

    newschoolData.save((err, doc)=>{
        if(err)
        {
            res.json({msg: err});
        }
        else {
            res.json({msg: 'Contact added successfully'});
        }
    })
});

router.post('/schoolname/input', (req, res, next) => {
    console.log(req.body.schoolname);
    let newschoolNameData = new schoolNameData({
        name:req.body.schoolname
    });

    newschoolNameData.save((err, newschoolNameData)=>{
        if(err)
        {
            res.json({msg: 'Failed to add contact'});
        }
        else {
            res.json({msg: 'Contact added successfully'});
        }
    });
});

//delete contacts
router.delete('/:id', (req, res, next) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send(`No recoder with given id : ${req.params.id}`);
    schoolData.findByIdAndRemove(req.params.id, function(err, result) {
        if(err)
        {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

router.delete('/schoolname/:id', (req, res, next) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send(`No recoder with given id : ${req.params.id}`);
    schoolNameData.findByIdAndRemove(req.params.id, function(err, result) {
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
    schoolData.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('error in retriving schoolData : ' + JSON.stringify(err,undefined, 2));
        }
    });
});

router.put('/:id', (req, res, next) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send(`No recoder with given id : ${req.params.id}`);
        var newschoolData = {
            schoolname:req.body.schoolname,
            year: req.body.year,
            month: req.body.month,
            day:req.body.day,
            electricity: req.body.electricity,
            heating:req.body.heating,
            water: req.body.water
        };
    schoolData.findByIdAndUpdate(req.params.id,{$set:newschoolData},{new : true },(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('error in retriving schoolData : ' + JSON.stringify(err,undefined, 2));
        }
    });
});

router.put('/schoolname/:id', (req, res, next) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send(`No recoder with given id : ${req.params.id}`);
        var newschoolData = {
            name:req.body.schoolname
        };
    schoolNameData.findByIdAndUpdate(req.params.id,{$set:newschoolData},{new : true },(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('error in retriving schoolData : ' + JSON.stringify(err,undefined, 2));
        }
    });
});

module.exports = router;