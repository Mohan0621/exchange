export class SkillExchangeRequestService {
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