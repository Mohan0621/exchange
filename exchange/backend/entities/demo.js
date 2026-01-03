import { UserService,User } from "./user";
import { InMemoryUserRepository } from "./user";
import { Skill, GreedySkillMatchStrategy } from "./skill";
import { Matchservice } from "./matchsevice";
const userRepo =new InMemoryUserRepository();
const userService=new UserService(userRepo);
const skillMatchStrategy=new GreedySkillMatchStrategy();
const matchservice=new Matchservice(skillMatchStrategy);
function demo(userService,matchservice){
    const skill1=new Skill(1,'JavaScript');
    const skill2=new Skill(2,'Python');
    const skill3=new Skill(3,'Java');
    const skill4=new Skill(4,'C++');
    const user1=new User(1,'Alice',4.5,[skill1,skill2],[skill3]);
    userService.registerUser(user1);
    const user2=new User(2,'Bob',4.0,[skill3],[skill1,skill4]);
    userService.registerUser(user2);
    const user3=new User(3,'Charlie',4.8,[skill1,skill4],[skill2]);
    const x = userService.getUserProfile(3);
    matchservice.findMatchesForUser(user1,userService.listUsers());
}
demo(userService,matchservice);