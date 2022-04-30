const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
    thoughtText: {
      type: String,
      required: true,
      trim: true,
      validate: [({ length }) => length <=280, 'Thoughts should be less than 280 characters.']
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    // Use Reply Schema to validate for a reply
    reactions: [ReactionSchema],
  },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );


CommentSchema.virtual('replyCount').get(function() {
return this.replies.length;
  });
  
const Comment = model('Thought', ThoughtSchema);
  
module.exports = Thought;

// thoughtText

// String
// Required
// Must be between 1 and 280 characters
// createdAt

// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
// username (The user that created this thought)

// String
// Required
// reactions (These are like replies)

// Array of nested documents created with the reactionSchema