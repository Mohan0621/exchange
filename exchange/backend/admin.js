
class AdminReportService{
    constructor(userRepository,ratingRepository,requestRepository){
        this.userRepository=userRepository;
        this.ratingRepository=ratingRepository;
        this.requestRepository=requestRepository;
    }
    getTopRatedUsers(limit){
        const users=this.userRepository.getAllUsers();
        users.sort((a,b)=>b.rating-a.rating);
        return users.slice(0,limit);
    }
    getUsersWithLowRating(threshold){
        const users=this.userRepository.getAllUsers();
        const lowRatedUsers=[];
        for(let user of users){
            if(this.ratingRepository.getAverageRatingForUser(user.id)<threshold)
                lowRatedUsers.push(user);
        }
        return lowRatedUsers;
    }
    getPendingRequests(){
        const allUsers=this.userRepository.getAllUsers();
        let PendingRequests=[];
        for(let user of allUsers){
            const userRequsets=this.requestRepository.getRequestsByUserId(user.id).filter(request=>request.status==='pending');
            PendingRequests.push(...userRequsets);
        }
            return PendingRequests;
    }
}
