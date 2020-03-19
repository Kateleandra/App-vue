const mongoose = require('mongoose');

const Occupations = mongoose.model("Occupations");

module.exports = {
    async index(req, res){
        const occupations = await Occupations.find();
        return res.json(occupations);
    },
    async store(req, res){
        const occupation = await Occupations.create(req.body);
        return res.json(occupation);
    }
};