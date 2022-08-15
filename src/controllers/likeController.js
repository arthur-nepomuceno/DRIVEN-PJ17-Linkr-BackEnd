import {postLike, postUnlike} from "../repositories/likeRepository.js"
export async function Like(req,res){
    const userId = res.locals.userId;
    const {postId} = req.body;
 
    try {
       await postLike(userId, postId);
        res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function Unlike(req,res){
    const userId = res.locals.userId;
    const {postId} = req.body;

    try {
        await postUnlike(userId, postId);
        res.sendStatus(200);

    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }

}