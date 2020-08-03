const express = require('express');
// const Joi = require('joi');
const router = express.Router();
const data = require('../data/data').data;

router.get('/', function (req, res) {
    res.json(data.teams);
}
);

module.exports = router;
