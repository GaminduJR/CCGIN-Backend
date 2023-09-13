const express = require('express');
const Posts = require('../models/post');

const router = express.Router();

//Save posts

router.post('/post/save', async (req, res) => {
    try {
        const newPost = new Posts(req.body);
        await newPost.save();
        return res.status(200).json({
            success: "Posts saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});

//get post

// router.get('/posts',(req,res)=>{
//     Posts.find().exec((err,posts)=>{
//         if(err){
//             return res.status(400).json({
//                 erro:err
//             })
//         }

//         return res.status(200).json({
//             success:true,
//             existingPosts:posts
//         });
//     });
// });

router.get('/posts', async (req, res) => {
    try {
        const posts = await Posts.find().exec();
        return res.status(200).json({
            success: true,
            existingPosts: posts
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});


//update post

// router.put('/post/update/:id',(req,res)=>{
//     Posts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success:"Update Succesfully"
//             })
//         }
//     );
// });

router.put('/post/update/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id, { $set: req.body }).exec();

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        return res.status(200).json({
            success: 'Update Successfully'
        });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
});


//Delete post

// router.delete('/post/delete/:id',(req,res)=>{
//     Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

//         if(err) return res.status(400).json({
//             message:"Delete unsuccesful",error
//     });

//         return res.json({
//             message:"Delete Succesful",deletedPost
//         });
//     });
// });

router.delete('/post/delete/:id', async (req, res) => {
    try {
        const deletedPost = await Posts.findByIdAndRemove(req.params.id).exec();

        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        return res.json({ message: 'Delete Successful', deletedPost });
    } catch (err) {
        return res.status(400).json({ message: 'Delete unsuccessful', error: err });
    }
});


module.exports = router;