import { getHashtagByName, insertHashtag, insertPostsHashtags } from "../repositories/hashtagRepository.js";
import { newPublish } from "../repositories/publishRepository.js";

export default async function publishController(req, res){
   const { userId } = res.locals; 
   const { url, content } = req.body;
   const post = { userId, url, content };
   const hashtagArray = res.locals.hashtagArray;

   try {
      const { rows: postInfo } = await newPublish(post);

      if(hashtagArray.length > 0){

         for(let i = 0; i < hashtagArray.length; i++){
            const hashtag = hashtagArray[i];

            const { rows: hashtagExists } = await getHashtagByName(hashtag);

            if(hashtagExists.length === 0){
               const { rows: hashtagInfo } = await insertHashtag(hashtag);
               
               await insertPostsHashtags(postInfo[0].id, hashtagInfo[0].id);
            } else {
               await insertPostsHashtags(postInfo[0].id, hashtagExists[0].id);
            }
         }
      }
       
      return res.sendStatus(201)
      
      } catch (error) {
         return res.status(500).send(error);
     }
}
    