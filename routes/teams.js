const express = require('express');
// const Joi = require('joi');
const router = express.Router();


router.get('/', function (req, res) {
    res.json(['team_1', 'team_2']);
}
);

module.exports = router;
