const express = require('express');
// const Joi = require('joi');

const router = express.Router();
router.get('/', function (req, res) {
    res.json(['stat_1', 'stat_2']);
}
);

module.exports = router;
