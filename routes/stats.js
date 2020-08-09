const express = require('express');
const data =  require('../data/data').data;
const encountersSchema = require('../utils/schema').encountersSchema;
const Joi = require('joi');

function filterBy2Teams(team1, team2){
    const teams = [team1, team2]
    var filteredDf = data.footballDf
    .filter(
        row => teams.includes(row.get("home_team")) && teams.includes(row.get("away_team"))
    )
    //.select("home_team", "away_team", "home_score", "away_score")
    return filteredDf;
}

const router = express.Router();

router.get('/encounters', function (req, res) {
    validation = encounters_schema.validate(req.body);
    if(validation.error){
        res.status(400).send(validation.error);
        return;
    }
    team1 = req.body.team1;
    team2 = req.body.team2;
    if( ! (data.teams.includes(team1) && data.teams.includes(team2)) ){
        res.status(400).send({details: "Invalid team name/s."});
        return;
    }
    const teamsDf = filterBy2Teams(team1, team2);
    teamsDfDict =  teamsDf.toDict();
    const stats = get2TeamsStats(teamsDfDict);
    res.json({table: teamsDfDict, stats: stats});
}
);

module.exports = router;
