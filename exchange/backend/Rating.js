function Rating(target_id,user_id,score,comment){
    this.target_id=target_id;
    this.user_id=user_id;
    this.score=score;
    this.comment=comment;
}
class RatingRepository{
    addRating(rating){
        throw new Error("Not implemented");
    }
    computeAverageRating(target_id){
        throw new Error("Not implemented");
    }
}
class InMemoryRatingRepository extends RatingRepository{
    constructor(){
        super();
        this.ratings=[];
    }
    addRating(rating){
        this.ratings.push(rating);
    }
    computeAverageRating(target_id){
        const target_rating=this.ratings.filter(ratings=>ratings.target_id===target_id);
        if(target_rating.length===0) return 0;
        let total_score=0;
        for(const x of target_rating){
            total_score+=x.score;
        }
        return total_score/target_rating.length;
    }
}
class RatingService{
    constructor(RatingRepository){
        this.RatingRepository=RatingRepository;
    }    
    rateuser(rating){
        this.RatingRepository.addRating(rating);
        return rating;
    }
    getAverageRating(target_id){
        return this.RatingRepository.computeAverageRating(target_id);
    }
}export {Rating,InMemoryRatingRepository,RatingService};