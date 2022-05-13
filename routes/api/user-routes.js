const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    deleteUser,
    removeFriend
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users

// /api/users

router
  .route('/')
  .get(getAllUsers)
  .post(createUser)

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
 
  .delete(deleteUser);

router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend)

module.exports = router;