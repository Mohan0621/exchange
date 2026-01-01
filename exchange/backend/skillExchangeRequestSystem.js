function SkillExchangeRequestSystem(requestid,userid,target_id,offered_skill_id,requested_skill_id,status) {
    this.requestid = requestid;
    this.userid = userid;
    this.target_id = target_id;
    this.offered_skill_id = offered_skill_id;
    this.requested_skill_id = requested_skill_id;
    this.status = status; // e.g., 'pending', 'accepted', 'rejected'
}
class SkillExchangeRequestRepository {
    addRequest(request) {
        throw new Error("Not implemented");
    }
    getRequestsByUserId(userid) {
        throw new Error("Not implemented");
    }
    getRequestById(requestid) {
        throw new Error("Not implemented");
    }
}
class InMemorySkillExchangeRequestRepository extends SkillExchangeRequestRepository {
    constructor() {
        super();
        this.requests = [];
    }
    addRequest(request) {
        this.requests.push(request);
    }
    getRequestsByUserId(userid) {
        return this.requests.filter((request) => request.userid === userid);
    }
    getRequestById(requestid) {
        return this.requests.find((request) => request.requestid === requestid);
    }
}
class SkillExchangeRequestService {
    constructor(requestRepository) {
        this.requestRepository = requestRepository;
    }   
    createRequest(request) {
        this.requestRepository.addRequest(request);
        return request;
    }
   acceptRequest(requestid){
    const request=this.requestRepository.getRequestById(requestid);
    if(request.status==="pending"){
        request.status='accepted';
        return request;
    }
    return null;
   }
   rejectRequest(requestid){
    const request=this.requestRepository.getRequestById(requestid);
    if(request.status==="pending"){
        request.status='rejected';
        return request;
    }
    return null;
   }
   completeRequest(requestid){
    const request=this.requestRepository.getRequestById(requestid);
    if(request.status==="accepted"){
        request.status='completed';
        return request;
    }
    return null;
   }
}
module.exports = {
    SkillExchangeRequestSystem,
    InMemorySkillExchangeRequestRepository,
    SkillExchangeRequestService
}