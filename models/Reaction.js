// import dependencies
const { Schema, model, isValidObjectId } = require('mongoose')

//This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.


const ReactionSchema = new Schema({
    reactionId: {
        type: Object,
        default: new Object
    },
    reactionBody:{
        type: String,
        //required
        // 280 char max
    },
    username:{
        type:String,
        //required
    },
    createdAt:{
        type: Date,
        default: Date.now
    }, 

})