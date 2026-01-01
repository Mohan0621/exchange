function Skill(id,name){
    this.id=id;
    this.name=name;
}

class SkillMatchStrategy{
    findMatches(user, users)
    {
        throw new Error("Not implemented");
    }
}
class GreedySkillMatchStrategy extends SkillMatchStrategy{
    findMatches(user, users){
        const matches=[];
        const userSkills=new Set(user.skills.map(skills=>skills.id));
        const userWantedSkills=new Set(user.skillsWanted.map(skills=>skills.id));
        for(const x of users){
            if(x.id===user.id) continue;
            const xSkills=new Set(x.skills.map(skills=>skills.id));
            const xWantedSkills=new Set(x.skillsWanted.map(skills=>skills.id));
            const commonSkills=[...userSkills].filter(Skillid=>xWantedSkills.has(Skillid));
            const wantedSkills=[...userWantedSkills].filter(Skillid=>xSkills.has(Skillid));
            if(commonSkills.length>0 && wantedSkills.length>0){
                matches.push(x);
            }
        }
        matches.sort((a,b)=>b.rating - a.rating);
        return matches;
    }
}
export {Skill,SkillMatchStrategy,GreedySkillMatchStrategy};