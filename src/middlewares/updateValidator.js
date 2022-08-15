import { getPostById } from "../repositories/postsRepository.js";

export default async function updateValidator(req, res, next){
    const userIdToken = res.locals.userId;
    const { id } = req.body;
    
    try {
        const {rows: post} = await getPostById(id);
        if(userIdToken === post[0].userId){
            return next();
        } else {
            return res.sendStatus(401);
        }
    } catch(error) {
        return res.status(500).send(error);
    }
}