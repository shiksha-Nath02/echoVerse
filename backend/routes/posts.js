const auth= require('../middleware/auth');
const router=require('express').Router();
const postCtrl= require('../controllers/postCtrl');

router.get("/",postCtrl.getAllPosts);
router.get("/user", auth, postCtrl.getPostByUserId);

router.get("/:id",postCtrl.getPostById);
router.post("/", auth, postCtrl.createPost);
router.put("/:id", auth, postCtrl.updatePost);
router.delete("/:id",auth, postCtrl.deletePost);

module.exports= router;