import jwt from 'jsonwebtoken'; 
export default async function login(req, res){
    const query = res.locals.query;
    try{
        const SECRET_KEY = process.env.JWT_SECRET;
        const token = jwt.sign({id:query.id}, SECRET_KEY, {expiresIn: '15 minutes'});
         return res.status(200).send({token: token});
    } catch(error){
        return res.status(500).send(`${error}.`)
    }
}