import { deletePostById, deletePostHashtagsById } from "../repositories/deleteRepository.js";

export default async function deletePost(req, res){
    const { id } = req.params;

    try {
        await deletePostById(id)
        await deletePostHashtagsById(id)
        return res.sendStatus(200);
    } catch(error) {
        return res.status(500).send(error);
    }
}