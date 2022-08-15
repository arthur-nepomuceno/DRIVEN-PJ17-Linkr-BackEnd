import urlMetadata from "url-metadata";
import { getHashtagPosts, getTrendingHashtags } from '../repositories/hashtagRepository.js';
import { getPostsLikesList } from '../repositories/postsRepository.js';

export async function trendingHashtags(req, res){

    try {
        const { rows: hashtagList } = await getTrendingHashtags();
        res.status(200).send(hashtagList);

    } catch(error) {
       
        res.sendStatus(500);
    }

}

export async function hashtagPosts(req, res){

    try {

        const hashtagName = res.locals.hashtagName;

        const { rows: hashtagPosts } = await getHashtagPosts(hashtagName);
        const {rows: likesList} = await getPostsLikesList();

        hashtagPosts.map(post => {
            let names = [];
            likesList.map(like => {
                if(post.id === like.postId){
                    names.push(like.userName)
                }
            })
            post.likedBy = names;
        });

        for(let i = 0; i < hashtagPosts.length; i++){
            const metadata = await urlMetadata(hashtagPosts[i].postUrl);
            hashtagPosts[i].urlTitle = metadata.title;
            hashtagPosts[i].urlDescription = metadata.description;
            hashtagPosts[i].urlImage = metadata.image;
        }

        res.status(200).send(hashtagPosts);

    } catch(error){
       
        res.sendStatus(500);
    }
}