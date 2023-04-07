const mongoose = require('mongoose');


const starSchema = new mongoose.Schema({
    title : {
        type : String
    },
    short_description : {
        type : String
    },
    description : {
        type : String
    },
    image_url : {
        type : String
    },
    wiki_url : {
        type : String
    },
})

module.exports =  mongoose.model("Star",starSchema)