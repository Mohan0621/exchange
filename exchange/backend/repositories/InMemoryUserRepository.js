export class InMemoryUserRepository extends UserRepository{
    constructor(){
        super();
        this.users = [];
    }
    addUser(user){
        this.users.push(user);
    }
    getUser(id){
        return this.users.find(user=>user.id===id);
    }
    getAllUsers(){
        return this.users;
    }
}