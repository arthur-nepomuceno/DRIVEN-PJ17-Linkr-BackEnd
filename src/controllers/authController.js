import { createUser } from "../repositories/authRepository.js";
import passwordEncrypter from "../utilities/passwordEncrypter.js";

async function postSingUp(req, res){
    const {email, password, userName, pictureUrl} = req.body;
    const secret = passwordEncrypter(password);
    const user = {email, password: secret, userName, pictureUrl};

    try{
        await createUser(user);
        return res.sendStatus(201);
    } catch(error) {
        return res.status(500).send(error);
    }
};

export { postSingUp };