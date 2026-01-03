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
}export {RatingService};