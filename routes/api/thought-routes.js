const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
  } = require('../../controllers/thought-controller');
  

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);


  // Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Getting all the reaction for the Thought
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

//deleting the reaction using the ID for the Reaction. 
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction)
  
module.exports = router;