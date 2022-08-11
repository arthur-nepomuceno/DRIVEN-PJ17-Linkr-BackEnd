import { getUserByEmail, getUserByUserName } from "../repositories/usersRepository.js";

export default async function signUpValidator(req, res, next){
    const body = req.body;
    try{
        const {rows: email} = await getUserByEmail(body.email);
        const {rows: userName} = await getUserByUserName(body.userName);

        if(email.length !== 0 || userName.length !== 0){
            return res.sendStatus(401);
        } else {
            next();
        }
        
    } catch(error){
        return res.status(500).send(error);
    }
};