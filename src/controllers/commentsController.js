import {addnewComment} from "../repositories/commentRepository.js"
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

