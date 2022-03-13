var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'redpositiveassign@gmail.com',
        pass: 'strongpassword'
    }
});

const express = require('express');
const router = express.Router();
const Person = require('../models/personModel');

router.post('/', async (req, res) => {
    const users = req.body;
    console.log(users);
    let people = [];
    try {
        for (let i = 0; i < users.length; i++) {
            const cur = await Person.find({ uid: users[i] });
            if (cur.length == 0) throw err('No such person');
            people.push(cur[0]);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    console.log(people);

    var mailOptions = {
        from: 'redpositiveassign@gmail.com',
        to: 'info@redpositive.in',
        subject: 'Sending Email using Node.js',
        text: `${JSON.stringify(people)}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            res.send('success');
            console.log('Email sent: ' + info.response);
        }
    });
})

module.exports = router;