const Joi = require('joi');

exports.encountersSchema = Joi.object({
    team1: Joi.string().required(),
    team2: Joi.string().required(),
    start_date: Joi.string(),
    end_date: Joi.string(),
});