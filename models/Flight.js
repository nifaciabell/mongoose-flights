const mongoose = require("mongoose");

// Create the schema
const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
     enum: ["American", "Southwest", "United"],
  },
flightNo: {
    type:Number,
    min:10,
    max: 9999,
    required: true,
  },
  
  departure: Date,
}, 
//  {timestamps:true}
);

// Create the model

const Flight = mongoose.model('Flight', flightSchema )
module.exports = Flight;
