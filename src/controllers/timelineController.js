import urlMetadata from "url-metadata";

export default async function timeline(req, res){
    const posts = res.locals.posts;

    try {

        for(let i = 0; i < posts.length; i++){
            const metadata = await urlMetadata(posts[i].postUrl);
            posts[i].urlTitle = metadata.title;
            posts[i].urlDescription = metadata.description;
            posts[i].urlImage = metadata.image;
        }

        return res.send(posts);

    } catch(error) {
        return res.status(500).send(error);
    }
}  