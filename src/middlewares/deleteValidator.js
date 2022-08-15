import { getPostById } from "../repositories/postsRepository.js";

export default async function deleteValidator(req, res, next){
    const userIdToken = res.locals.userId;
    const { id } = req.params;
    
    try {
        const {rows: post} = await getPostById(id);
        if(userIdToken === post[0].userId){
            return next()
        } else {
            return res.sendStatus(401);
        }
    } catch(error) {
        return res.status(500).send(error);
    }
}