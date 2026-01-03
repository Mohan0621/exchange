
export default class UserService{
    constructor(userRepository){
        this.UserRepository=userRepository;
    }
    registerUser(user){
        this.UserRepository.addUser(user);
        return user;
    }
    getUserProfile(id){
        return this.UserRepository.getUser(id);
    }
    listUsers(){
        return this.UserRepository.getAllUsers();
    }
}