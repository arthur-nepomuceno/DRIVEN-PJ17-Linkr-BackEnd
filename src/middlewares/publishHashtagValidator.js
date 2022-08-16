export function publishHashtagValidator(req, res, next){
    const { content } = req.body;
    let hashtagArray = [];
    if(content){
        const lookForHashtags = content.split(" ");
        for(let i = 0; i < lookForHashtags.length; i++){
            if(lookForHashtags[i].substr(0,1) === "#"){
                hashtagArray.push(lookForHashtags[i].substr(1, lookForHashtags[i].length));
            }
        }
    }
    res.locals.hashtagArray = hashtagArray;    
    next();

}