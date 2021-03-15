// import dependencies
const { Schema, model } = require('mongoose');
// const { search } = require('../routes');
// const Thought = require('./Thought');

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        trim: true, 
        required: true,
    },
    email:{
        // validation for mongoose
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    }, 
    //array of Objects of Object IDs
    thoughts:[{
        // reference the thought model
        // _id:
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    },],
    friends:[{
        //reference the User model (self reference)
        type: Schema.Types.ObjectId,
        ref: 'User',
    },],
},
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
{
    toJSOn: {
        virtuals:true,
    },
    id: false,
}
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

// create the User model using the UserSchema
const User = model('User', userSchema );
// export the User model
module.exports = User;
