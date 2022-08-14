import { getHashtagByName, insertHashtag, insertPostsHashtags } from "../repositories/hashtagRepository.js";
import { createPost } from "../repositories/publishRepository.js";

export default async function publishController(req, res){
    const { userId, url, content } = req.body;
    /* const userId = res.locals.userId; */
    const hashtagArray = res.locals.hashtagArray;
    const post = { userId, url, content };
    
    try {
       
       const { rows: postInfo } = await createPost(post);

       if(hashtagArray.length > 0){

         for(let i = 0; i < hashtagArray.length; i++){
            const { rows: hashtagExists } = await getHashtagByName(hashtagArray[i]);
            console.log(hashtagExists.length)

            if(hashtagExists.length === 0){
               const hashtagName = hashtagArray[i];
               const { rows: hashtagInfo } = await insertHashtag(hashtagName);
               await insertPostsHashtags(postInfo[0].id, hashtagInfo[0].id);
            }

            await insertPostsHashtags(postInfo[0].id, hashtagExists[0].id);
         }

       }

       return res.sendStatus(201)
         } catch (error) {
            return res.status(500).send(error);
     }
}
    