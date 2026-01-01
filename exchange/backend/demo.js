import { InMemoryUserRepository, UserService } from "./user.js";
import { Skill, GreedySkillMatchStrategy } from "./skill.js";
import { Matchservice } from "./matchsevice.js";

const userRepo = new InMemoryUserRepository();
const userService = new UserService(userRepo);
