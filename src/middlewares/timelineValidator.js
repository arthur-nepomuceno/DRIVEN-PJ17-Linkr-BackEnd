import { getPosts, getPostsLikesList } from "../repositories/postsRepository.js";

export default async function timelineValidator(req, res, next){
    try {
        const {rows: posts} = await getPosts();
        const {rows: likesList} = await getPostsLikesList();
        
        posts.map(post => {
            let names = []
            likesList.map(like => {
                if(post.id === like.postId){
                    names.push(like.userName)
                }
            })
            post.likedBy = names;
        })

        res.locals.posts = posts;
        console.log(res.locals.posts)
        return next();

    } catch(error) {
        return res.status(500).send(error)
    }
}