const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            
            trim: true,
            unique: true,
        },
        email: {
            type: String, 
            required: true,
            unique: false,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            getters: true,
          },
          id: false
    }
);



const User = model('User', userSchema);

module.exports = User;