import { updatePostById } from "../repositories/updateRepository.js"

export default async function updateController(req, res){
    const { content } = req.body;
    const { id } = req.body;

    try {

        await updatePostById(content, id)
        return res.sendStatus(202);
    } catch(error) {
        return res.status(500).send(error);
    }
}