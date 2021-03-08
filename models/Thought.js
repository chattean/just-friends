// import dependencies
const { Schema, model } = require('mongoose')
const moment = require('moment')
const reactionSchema = require('./Reaction');

var now = moment().toDate();

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        //Validation for 1 to 280 chars
        minlength:1,
        maxlength:280,
        //required
        required:'Please leave a thought, the universe will give you a penny.'
    },
    // Use moment in the getter method to format the timestamp on query
    // const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
    createdAt:{
        type: Date,
        default: Date.now,
        $gte: now
    }, 
    username:{
        type: String,
        //required
        required:true
    },
    // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    reactions:
        // array of nested documents created with the reactionSchema
        [
            reactionSchema
        ]
},
{
    toJSON: {
        getters:true
    },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

// create the Thought model using the UserSchema
const Thought = model('Thought', thoughtSchema );
// export the Thought model
module.exports = Thought;
