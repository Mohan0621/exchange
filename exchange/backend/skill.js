export function Skill(id,name){
    this.id=id;
    this.name=name;
}

class SkillMatchStrategy{
    findMatches(user, users)
    {
        throw new Error("Not implemented");
    }
}
export class GreedySkillMatchStrategy extends SkillMatchStrategy{
    findMatches(user, users){
        const matches = [];
        const userSkills = new Set(user.skillswanted.map(skill => skill.id));

        for(const otherUser of users){
            if(otherUser.id === user.id) continue;
            const otherSkills = new Set(otherUser.skills.map(skill => skill.id));
            const commonSkills = [...userSkills].filter(skill => otherSkills.has(skill));
            if(commonSkills.length > 0){
                matches.push({
                    user: otherUser,
                    commonSkills: commonSkills
                });
            }
        }
        return matches;
    }
}