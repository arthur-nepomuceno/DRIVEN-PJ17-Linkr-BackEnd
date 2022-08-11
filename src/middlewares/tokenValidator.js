import jwt from 'jsonwebtoken';

export default async function validateUser(req, res, next) {
    const authorization = req.headers.authorization;
    if(!authorization){

        return res.sendStatus(401);
    
    }
    const token = authorization.split(' ')[1]

    const secretKey = process.env.JWT_SECRET;

    if (token) {
        return jwt.verify(token, secretKey, function(err) {
            if (err) {
                return res.status(401).send("invalid or non existing token, unauthorized");
            }
            const { id: userId } = jwt.verify(token, secretKey)

            res.locals.userId = userId;
  
             return next();
        });
    }
    return res.status(400).send("invalid or non existing token, unauthorized")
}
