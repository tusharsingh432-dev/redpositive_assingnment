const express = require('express');
const router = express.Router();
const Person = require('../models/personModel');
const { v4: uuidv4 } = require('uuid');



router.get('/get', async (req, res) => {
    try {
        const people = await Person.find({});
        res.send(people);
    } catch (err) {
        res.status(404).send(err);
    }
})

router.post('/add', async (req, res) => {
    const person = req.body;
    console.log(req.body);
    const uid = uuidv4();

    const newPerson = new Person({
        ...person,
        uid
    })

    try {
        await newPerson.save();
        res.send('success');
    } catch (err) {
        res.status(404).send(err);
    }
})

module.exports = router;