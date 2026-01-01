import {Skill} from './skill.js';

export function User(id,name,rating,skills,skillswanted,){
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.skills = skills;
    this.skillswanted = skillswanted;
}
export class UserRepository{
    addUser(User){
        throw new Error("Not implemented")
    }
    getUser(id){
        throw new Error("Not implemented");
    }
    getAllUsers(){
        throw new Error("Not implemented");
    }
}
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
export class UserService{
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