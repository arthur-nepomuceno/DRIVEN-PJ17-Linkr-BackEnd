import { getHashtagByName } from "../repositories/hashtagRepository.js";

async function hashtagValidator(req, res, next){

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

async function hashtagChecker(req, res, next){

    const { content } = req.body;
    let hashtagArray = [];

    if(content){
        const lookForHashtags = content.split(" ");

        for(let i = 0; i < lookForHashtags.length; i++){
            if(lookForHashtags[i].substr(0,1) === "#"){
                hashtagArray.push(lookForHashtags[i].substr(1,lookForHashtags[i].length));
            }
        }
    }

    res.locals.hashtagArray = hashtagArray;
    
    next();

}

export {
    hashtagValidator,
    hashtagChecker
}