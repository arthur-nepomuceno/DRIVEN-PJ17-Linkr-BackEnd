import urlMetadata from "url-metadata";

function getPostMetadata(postUrl){
    return urlMetadata(postUrl);
}

export {getPostMetadata}