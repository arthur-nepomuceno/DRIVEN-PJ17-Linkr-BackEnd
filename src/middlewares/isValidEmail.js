import {getUserByEmail } from "../repositories/usersRepository.js";

export default async function isValidEmail(req, res, next){
 
    const body = req.body;
    
    try{
      
        const {rows: email} = await getUserByEmail(body.email);
     
        if(email.length === 0){
            return res.sendStatus(401);
        } else {
            next();
        }

    } catch(error){
        return res.status(500).send(error);
    }
}

export { isValidEmail } 