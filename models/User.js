// import dependencies
const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username:{
        type: String
    },
    email:{
        // validation for mongoose
        type: String
    }, 
    thoughts:{
        // reference the thought model
        // _id:
    },
    // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    friends:{
        //reference the User model (self reference)
    }
})

// create the User model using the UserSchema
const User = model('User', UserSchema );
// export the User model
module.exports = User;
