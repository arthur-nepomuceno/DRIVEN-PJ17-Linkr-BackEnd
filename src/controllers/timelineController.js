import { getPosts, getPostsLikesList } from "../repositories/postsRepository.js"

export default async function timeline(req, res){
    try {
        const {rows: posts} = await getPosts();
        const {rows: likesList} = await getPostsLikesList();
        
        let likes = []
        posts.map(post => {
            let names = []
            likesList.map(like => {
                if(post.id === like.postId){
                    names.push(like.userName)
                }
            })
            likes.push(names);
        })

        return res.status(200).send(likes);
    } catch(error) {
        return res.status(500).send(error)
    }
}  