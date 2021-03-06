const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date, 
           
        },
        username: {
            type: String,
            required: true
        },
    },
    {
        toJSON: {
            getters: true,
          },
          id: false
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;