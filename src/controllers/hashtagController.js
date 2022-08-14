import { getHashtagPosts, getTrendingHashtags } from '../repositories/hashtagRepository.js';

export async function trendingHashtags(req, res){

    try {

        const { rows: hashtagList } = await getTrendingHashtags();
        res.status(200).send(hashtagList);

    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }

}

export async function hashtagPosts(req, res){

    try {

        const hashtagName = res.locals.hashtagName;

        const { rows: hashtagPosts } = await getHashtagPosts(hashtagName);
        res.status(200).send(hashtagPosts);

    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}