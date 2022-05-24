const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require("multer");
const upload = multer();

// router.get('/', postController.readPost);
// router.post('/', upload.single("file"), postController.createPost);
// router.put('/:id', postController.updatePost);
// router.delete('/:id', postController.deletePost);

router.get('/', postController.readPost);
// router.post('/', upload.single("file"), postController.createPost);
router.post('/', upload.single("file"), postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;

// module.exports = function(app){
//     const recipeList = require('../controller/post.controller');
//     app.get('/', recipeList.readPost);
//     app.post('/', upload.single("file"), recipeList.createPost);
// };