const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    deleteUser
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
  .put(addFriend) // this was post before and didn't work when tested in insomnia as post
  .delete(deleteUser);

module.exports = router;