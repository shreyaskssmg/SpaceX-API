const mongoose = require('mongoose');


const planetSchema = new mongoose.Schema({
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
    model_url : {
        type : String
    },
    wiki_url : {
        type : String
    },
    number_of_moon : {
        type : String
    },
    day : {
        type : String
    },
    physical_characteristics : {
        mean_diameter : {
            type : String
        },
        surface_area  : {
            type : String
        },
        volume : {
            type : String
        },
        mass : {
            type : String
        },
        mean_density : {
            type : String
        },
        surface_gravity : {
            type : String
        }
    },
    composition : {
        type : Array
    }
})

module.exports =  mongoose.model("Planet",planetSchema)