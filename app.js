const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const stats =  require('./routes/stats');
const teams =  require('./routes/teams');
const loadData = require('./data/data').loadData;

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/stats', stats);
app.use('/api/teams', teams);
function runApp(){
  app.listen(port, () => console.log(`listening at http://localhost:${port}`));
}
loadData(runApp);