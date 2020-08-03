const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const stats =  require('./routes/stats')
const teams =  require('./routes/teams')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/stats', stats);
app.use('/api/teams', stats);
app.listen(port, () => console.log(`listening at http://localhost:${port}`));