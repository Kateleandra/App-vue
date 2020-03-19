const mongoose = require('mongoose');
const OccupationsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },

    // skills:{
    //     type: String,
    //     required: true
    // },

    // percentage:{
    //     type: String,
    //     required: true
    // },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model("Occupations", OccupationsSchema);