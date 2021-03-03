// import dependencies
const { Schema, model } = require('mongoose')

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String
        //Validation for 1 to 280 chars
        //required
    },
    // Use moment in the getter method to format the timestamp on query
    createdAt:{
        type: Date,
        default: Date.now
    }, 
    username:{
        type: String
        //required
    },
    // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    reactions:{
        // array of nested documents created with the reactionSchema
    }
})


// create the Thought model using the UserSchema
const Thought = model('Thought', ThoughtSchema );
// export the Thought model
module.exports = Thought;
