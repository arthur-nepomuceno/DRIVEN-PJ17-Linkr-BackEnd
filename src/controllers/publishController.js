import { createPost } from "../repositories/publishRepository.js";

export default async function publishController(req, res){
    const {url, content} = req.body
    const userId = res.locals.userId
    const post = {userId, url, content}
    console.log(post)
    
    try {
       await createPost(post)
       return res.sendStatus(201)
         } catch (error) {
            return res.status(500).send(error);
     }
}
    