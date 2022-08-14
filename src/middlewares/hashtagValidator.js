import { getHashtagByName } from "../repositories/hashtagRepository.js";

export default async function hashtagValidator(req, res, next){

    const hashtagName = req.params.hashtag;
    
    try {

        const { rows: hashtagExists } = await getHashtagByName(hashtagName);

        if(hashtagExists.length === 0){
            return res.status(404).send("Hashtag not found");
        }

        res.locals.hashtagName = hashtagName;

        next();

    } catch {
        res.sendStatus(500);
    }
}