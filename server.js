const express = require('express');
const app = express();
const db = require('./db.js');
const personRouter = require('./routes/personRoutes.js')

const port = process.env.PORT || 8000;
app.use(express.json())
app.use('/api/people', personRouter);

app.use('/', (req, res) => {
    res.send('Server Running///');
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});