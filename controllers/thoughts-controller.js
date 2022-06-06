const { Thought, User } = require('../models');

const thoughtsController = {
  // get all thoughts

  getAllThoughts(req, res) {
    Thought.find({})
    .populate({
      path: 'reactions', 
      select: '-__v'})
    .select('-__v')
    .sort({_id: -1})
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
  },

  // get single thought by id

  getThoughtById({params}, res){
    Thought.findOne({_id: params.id})
    .populate({
      path: 'reactions',
      select: '-__v'})
      .select('-__v')
      .then(dbThoughtData => {
        if(!dbThoughtData) {
          res.status(404).json({ message: 'No thought found!'});
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  
  },

  // add thought to user
  addThought({ body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({_id}) => {
        console.log(_id)
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // update thought

  updateThought({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.id }, 
        body, 
      { new: true, runValidators: true })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },

  // add Reaction to Thought

  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },


  // remove Thought

    removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then(deletedThought => {
        if(!deletedThought) {
          res.status(404).json({ message: 'No Thought found with this id!' });
          return
        }
        res.json(deletedThought);
      })
      .catch(err => res.json(err));
    },
        
    // remove Reaction from Thought

    removeReaction({ params }, res) {
      Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
      )
        .then(deletedReaction => {
          if (!deletedReaction) {
            res.status(404).json({ message: 'No Reaction found with this id!' });
            return;
          }
          res.json(deletedReaction)
        })
        .catch(err => res.json(err));
        
    }
  
};

module.exports = thoughtsController;