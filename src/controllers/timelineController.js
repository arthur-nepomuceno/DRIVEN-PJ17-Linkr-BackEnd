import { getPosts } from "../repositories/postsRepository.js"

export default async function timeline(req, res){
    try {
        const {rows: posts} = await getPosts();
        return res.status(200).send(posts);
    } catch(error) {
        return res.status(500).send(error)
    }
}