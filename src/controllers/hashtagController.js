import { getTrendingHashtags } from '../repositories/hashtagRepository.js';

export default async function trendingHashtags(req, res){

    try {

        const { rows: hashtagList } = await getTrendingHashtags();
        res.status(200).send(hashtagList);

    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }

}