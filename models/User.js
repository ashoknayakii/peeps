const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email required"],
      trim: true,
      match: [/.+@.+\..+/, "Email invalid.  Try again."]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// get total count of thoughts and reactions on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User
module.exports = User;