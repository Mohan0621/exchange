class Matchservice{
    constructor(skillMatchstraegy){
        this.skillMatchstraegy=skillMatchstraegy;
    }
    findMatchesForUser(user,users){
        return this.skillMatchstraegy.findMatches(user,users);
    }
}
export {Matchservice};