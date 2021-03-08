// import dependencies
const { Schema, Types } = require('mongoose')
const moment = require('moment')
var now = moment().toDate();

//This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        //required
        required: true, 
        // 280 char max
        maxlength:280
    },
    username:{
        type:String,
        //required
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        $gte: now

    }, 
}, 
{
    toJSON: {
      getters: true
    },
    id: false
  }
);

module.exports = reactionSchema;