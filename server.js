const express = require('express');
const app = express();
const path = require('path');
const db = require('./db.js');
const personRouter = require('./routes/personRoutes.js')
const mailRouter = require('./routes/mailRoutes.js')
const morgan = require('morgan');

const port = process.env.PORT || 8000;

app.use(morgan('tiny'));
app.use(express.json())
app.use('/api/people', personRouter);
app.use('/api/mail', mailRouter);
// app.use('/', (req, res) => {
//     res.send('Server Running///');
// })

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});