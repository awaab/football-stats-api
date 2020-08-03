const express = require('express');
const data =  require('../data/data').data;
// const Joi = require('joi');

function filterByTeam(team){
var filteredDf = data.football_df
.filter(row => row.get("home_team") === team)
.select("home_team", "away_team", "home_score", "away_score")
return filteredDf.toDict();
}

const router = express.Router();
router.get('/:team', function (req, res) {
    team = req.params.team;
    res.json(filterByTeam(team));
}
);

module.exports = router;
