import {addnewComment, getPostCommentbyId} from "../repositories/commentRepository.js"
export async function Comment(req,res){
    
    const userId = res.locals.userId;
    const {postId, comment} = req.body;
 
    try {
       await addnewComment(userId, postId, comment);
        res.sendStatus(200);
    } catch(error) {
        
        res.status(500).send(error);
    }
}

export async function getPostComment(req,res){
    
    const userId = res.locals.userId;
    const {id} = req.params;
    const postId = id
    console.log(postId)

    
    try {
      const { rows: postComment } = await getPostCommentbyId(postId);
       
        res.status(200).send(postComment);

    } catch(error) {
        
        res.status(500).send(error);
        console.log(error)
    }
}
