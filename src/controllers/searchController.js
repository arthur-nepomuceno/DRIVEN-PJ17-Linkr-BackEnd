import { searchUsers } from "../repositories/usersRepository.js";

export default async function searchController(req, res){
    const searchTerm = req.query.search;
    console.log('cheguei aqui ' + searchTerm)
    try {
        const {rows: users} = await searchUsers(searchTerm);
        console.log(users ? users : 'nenhum usuário encontrado');

        users[0] ? res.status(200).send(users) : res.status(204).send([{id:0, userName: 'Nenhum resultado', pictureUrl: 'https://http.cat/204'}])
        } catch (error) {
            return res.status(500).send(error);
     }
}