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